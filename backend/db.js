const express = require('express');
const app = express();

const mongoose = require('mongoose');

const MongoURL = 'mongodb+srv://bit21cs51:gvU4lpku2M4T9CcG@magicpin-db.20qkmtg.mongodb.net/?retryWrites=true&w=majority&appName=MagicPin-db';

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MagicPin-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB Compass');

    const db = mongoose.connection.db;

    const fetchCategary = await db.collection("collection")
    const CategaryData = await fetchCategary.find().toArray();

    const fetchData = await db.collection("data");
    const result = await fetchData.find().toArray();
    const fetchorder = await db.collection("orders")
    const OrderResult= await fetchorder.find().toArray(); 
    
   console.log(OrderResult)
    global.foodItem = result;
    global.Orders=OrderResult;
    global.foodCategary = CategaryData;

  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

module.exports = db;


