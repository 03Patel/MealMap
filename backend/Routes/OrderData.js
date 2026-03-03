const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


router.post('/orderData', async (req, res) => {
  try {
    const { email, order_data, order_date } = req.body;

    let existingOrder = await Order.findOne({ email });

    if (!existingOrder) {
      await Order.create({
        email,
        order_data: [{ date: order_date, items: order_data }]
      });
    } else {
      await Order.findOneAndUpdate(
        { email },
        { $push: { order_data: { date: order_date, items: order_data } } }
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Order save error:", error);
    res.status(500).send('Server Error: ' + error.message);
  }
});

// Fetch orders
router.post('/myOrders', async (req, res) => {
  try {
    const { email } = req.body;
    let orderData = await Order.findOne({ email });

    if (!orderData) return res.json([]);

    
    res.json(orderData.orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
