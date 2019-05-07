const express = require("express");
const postRouter = express();
const PostModel = require("./models");

postRouter.post("/", async (req, res) => {
  try {
    if (!req.session.admin) {
      res.status(403).json({
        message: "Unauthenticated"
      });
    } else {
      const postInfo = req.body;
      const newPost = await PostModel.create({
        ...postInfo,
        admin: req.session.admin._id
      });
      res.status(201).json(newPost);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

postRouter.get("/", async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;
    const data = await PostModel.find()
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

postRouter.put("/update", async (req, res) => {
  try {
    if (!req.session.admin) {
      res.status(403).json({
        message: "Unauthenticated"
      });
    } else {
      const postId = req.body.blogId;
      await PostModel.findByIdAndUpdate(postId, {
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

module.exports = postRouter;
