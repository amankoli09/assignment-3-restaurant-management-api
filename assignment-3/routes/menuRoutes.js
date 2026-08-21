const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.route('/')
    .post(async (req, res) => {
        try {
            const menuItem = new MenuItem(req.body);
            await menuItem.save();
            res.status(201).json(menuItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .get(async (req, res) => {
        try {
            const { category } = req.query;
            let query = {};
            if (category) {
                query.category = category;
            }
            const menuItems = await MenuItem.find(query);
            res.status(200).json(menuItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

router.route('/:id')
    .put(async (req, res) => {
        try {
            const menuItem = await MenuItem.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true, runValidators: true }
            );
            if (!menuItem) {
                return res.status(404).json({ message: 'Menu item not found' });
            }
            res.status(200).json(menuItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
            if (!menuItem) {
                return res.status(404).json({ message: 'Menu item not found' });
            }
            res.status(200).json({ message: 'Menu item deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

module.exports = router;
