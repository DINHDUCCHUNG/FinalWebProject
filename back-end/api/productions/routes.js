const express = require("express");
const productionRouter = express();
const ProductionModel = require("./models");

productionRouter.post("/", async (req, res) => {
  try {
    if (!req.session.admin) {
      res.status(403).json({
        message: "Unauthenticated"
      });
    } else {
      const productionInfo = req.body;
      const newProduction = await ProductionModel.create({
        ...productionInfo,
        admin: req.session.admin._id
      });
      res.status(201).json(newProduction);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

productionRouter.get("/", async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;
    const data = await ProductionModel.find()
      .populate({
        path: "admin",
        select: "fullName"
      })
      .skip(pageSize * (pageNumber - 1))
      .limit(Number(pageSize))
      .exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).end(error.message);
  }
});

productionRouter.put("/update", async (req, res) => {
  try {
    if (!req.session.admin) {
      res.status(403).json({
        message: 'Unauthenticated'
      });
    } else {
      const productionId = req.body.productionId;
      await ProductionModel.findByIdAndUpdate(productionId, {
        $set: {
          isPublic: req.body.isPublic
        }
      }).exec();
      res.status(200).end("update success!");
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

module.exports = productionRouter;
