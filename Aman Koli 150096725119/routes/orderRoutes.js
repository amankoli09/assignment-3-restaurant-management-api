const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

router.route('/')
    .post(async (req, res) => {
        try {
            const { tableNumber, items } = req.body;
            
            // Calculate total price based on menu items
            const menuItems = await MenuItem.find({ _id: { $in: items } });
            const totalPrice = menuItems.reduce((acc, item) => acc + item.price, 0);

            const order = new Order({
                tableNumber,
                items,
                totalPrice
            });

            await order.save();
            
            // Emit real-time event
            const io = req.app.get('io');
            if (io) {
                io.emit('newOrder', order);
            }

            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .get(async (req, res) => {
        try {
            const orders = await Order.find().populate('items');
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

router.route('/:id/status')
    .put(async (req, res) => {
        try {
            const { status } = req.body;
            const order = await Order.findByIdAndUpdate(
                req.params.id,
                { status },
                { new: true, runValidators: true }
            ).populate('items');

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            // Emit real-time event
            const io = req.app.get('io');
            if (io) {
                io.emit('orderStatusUpdated', order);
            }

            res.status(200).json(order);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

module.exports = router;
