const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const postRouter = require("./api/posts/routes");
const customerRouter = require("./api/customer/routes");
const productionRouter = require("./api/productions/routes");
const authRouter = require("./api/auth/routes");
const uploadFileRouter = require("./api/upload-file/routes");

mongoose.connect("mongodb://localhost:27017/webProjectMypham", error => {
  if (error) {
    throw error;
  }
  console.log("Success to connect Mongoose....");
  // setup

  //middle ware
  const server = express();
  server.use(express.static("uploads"));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(
    expressSession({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
    })
  );
  server.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true
    })
  );

  // routes

  server.use("/api/posts", postRouter);
  server.use("/api/customer", customerRouter);
  server.use("/api/productions", productionRouter);
  server.use("/api/auth", authRouter);
  server.use("/api/upload-file", uploadFileRouter);

  //start server
  server.listen(3001, error => {
    if (error) {
      throw error;
    }
    console.log("Listen to post 3001.....");
  });
});
