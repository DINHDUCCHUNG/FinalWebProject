const express = require('express');
const CustomerModel = require('./models');
const customerRouter = express();

customerRouter.post('/',async(req,res)=>{
    try{
        const orderInfo = req.body;
        const newOrder = await CustomerModel.create(orderInfo);
        res.status(201).json(newOrder);
    }catch(error){
        res.status(500).end(error.message);
    }
});

customerRouter.get('/',async(req,res)=>{
    try{
        const {pageNumber, pageSize} = req.query;
        const orderInfo = await CustomerModel.find()
        .skip(pageSize*(pageNumber-1))
        .limit(Number(pageSize))
        .exec();
        res.status(200).json(orderInfo);
    }catch(error){
        res.status(500).end(error.message);
    }
});

module.exports = customerRouter;