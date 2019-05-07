const express = require("express");
const { loadCollection, imageFilter } = require("../../utils");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const Loki = require("lokijs");
//setup
const DB_NAME = "db.json";
const COLLECTION_NAME = "images";
const UPLOAD_PATH = "uploads";
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${UPLOAD_PATH}/`);
  },
  filename(req, { originalname, mimetype }, cb) {
    const nameSegments = originalname.split('.');
    const name = nameSegments[0] || `${Date.now()}`;

    const mineTypeSegments = mimetype.split('/');
    const ext = mineTypeSegments[1] || 'jpeg';
    cb(null, `${Date.now()}-${name}.${ext}`);
  }
});
const upload = multer({ storage , fileFilter: imageFilter }); // multer configuration
const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}`, { persistenceMethod: "fs" });

const uploadFileRouter = express();


uploadFileRouter.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const col = await loadCollection(COLLECTION_NAME, db);
    const data = col.insert(req.file);
    console.log("admin1111",req.session.admin);
    db.saveDatabase();
    res.status(201).json({
      id: data.$loki,
      path: data.path,
      originalName: data.originalname
    });
  } catch (err) {
    res.status(500).end(error.message);
  }
});
uploadFileRouter.get("/images", async (req, res) => {
  try {
    const col = await loadCollection(COLLECTION_NAME, db);
    res.status(200).send(col.data);
  } catch (err) {
      console.log(err);
      res.status(500).end(error.message);
  }
});

uploadFileRouter.get("/images/:id", async (req, res) => {
  try {
    const col = await loadCollection(COLLECTION_NAME, db);
    const result = col.get(req.params.id);

    if (!result) {
      res.sendStatus(404);
      return;
    }
    console.log(result.fileName);
    res.status(200).json(result.path);
  } catch (err) {
    res.status(500).end(error.message);
  }
});
module.exports = uploadFileRouter;
