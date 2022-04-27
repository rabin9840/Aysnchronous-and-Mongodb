const mongoose=require('mongoose');
const express = require('express');
const router = express.Router();
const {Customer,validate}=require('../models/customer');//object destructure


router.get('/', async (req, res) => {
    const customers=await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let Customer = new Customer( {
      name: req.body.name,
      phone:req.body.phone,
      isGold:req.body.isGold
    });
  Customer= await customer.save();
  res.send(Customer);
});



module.exports=router;