const express = require('express');
const router = express.Router();

router.get("/", async(req, res, next)=>{
    res.send("Flip Project init!")
});