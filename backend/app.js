const express = require('express');

// import mongoose module
const mongoose = require('mongoose');
// Connect APP to DB and create leBouquiniste DB
mongoose.connect("mongodb://localhost:27017/argonautes");

const Argonaute = require('./models/argonaute');

const app = express();

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// import body parser module
const bodyParser = require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");
// Prepare Response to JSON Object
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

// Add Argonaute into DB
app.post("/addArgonaute", (req, res) => {
    console.log("Here in add Argonaute", req.body);
    const argonaute = new Argonaute({
       argonauteName:req.body.argonauteName,
    });
    argonaute.save();
})

//Get all Argonautes
app.get("/getAllArgonautes", (req, res) => {
    console.log("Here All Argonautes");
    Argonaute.find((err, doc) => {
      if (err) {
        console.log("Problem with Db");
      } else {
        res.status(200).json({
          message: "Here all Argonautes",
          argonautes: doc,
        })
      }
    })
})


module.exports = app;