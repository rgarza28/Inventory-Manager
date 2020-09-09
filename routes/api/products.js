const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const UserProducts = require('../../models/userProducts');

// Post user products
router.post("/", auth, async (req, res) => {
  try {
    const { sku, productName, description, 
        currentInventory, minInventory, cost, retail } = req.body;

   //Validation
   if (!sku || !productName || !description || !currentInventory || !minInventory || !cost || !retail) {
    return res.status(400).json({ msg: 'Please enter all fields' });
   }

   const newProducts = new UserProducts({
       sku,
       productName,
       description,
       currentInventory,
       minInventory,
       cost,
       retail,
       userId: req.user
   });

   const savedProducts = await newProducts.save();
   
   res.json(savedProducts);

  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Get all user products
router.get("/all", auth, async (req, res) => {
  let UserData = await UserProducts.find({ userId: req.user });
  res.json(UserData);
});

module.exports = router;