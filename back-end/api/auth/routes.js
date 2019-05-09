const express = require("express");
const bcryptjs = require("bcryptjs");
const AdminModel = require("../admin/models");
const authRouter = express();

authRouter.post("/register", async (req, res) => {
  try {
    const adminInfo = req.body;
    const existEmail = await AdminModel.findOne({
      email: adminInfo.email
    }).exec();
    if (existEmail) {
      res.status(403).end("Email has been used!");
    } else {
      const hashPassword = await bcryptjs.hash(adminInfo.password, 10);
      const newAdmin = await AdminModel.create({
        ...adminInfo,
        password: hashPassword,
        createAt: new Date()
      });
      res.status(201).json(newAdmin);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const loginInfo = req.body;
    const admin = await AdminModel.findOne({ email: loginInfo.email }).exec();
    console.log(admin);
    if (!admin) {
      res.status(200).json({
        message: "Admin not found!",
        success: false
      });
    } else {
      const checkPassword = await bcryptjs.compare(
        loginInfo.password,
        admin.password
      );
      if (checkPassword) {
        //success
        // create session storage
        console.log(admin._id);
        req.session.admin = {
          _id: admin._id,
          email: admin.email
        };
        //save
        req.session.save();
        console.log("day la:",req.session);
        res.status(200).json({
          message: "login success!",
          success: true
        });
      } else {
        res.status(200).json({
          message: "password is incorrect!",
          success: false
        });
      }
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

authRouter.get("/test", (req, res) => {
  console.log(req.session);
  res.status(200).end();
});

authRouter.get("/logout", (req, res) => {
  try {
    console.log("louout",res.session);
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.status(200).json({
      message: "logout success!",
      success: true
    });
  } catch (error) {
    res.status(500).end(error.message);
  }
});

module.exports = authRouter;
