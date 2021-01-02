const express = require('express');
const router = express.Router();
const shopController = require('../Controllers/shop.controller');

// Get user listing
router.post('/', shopController.create);
router.get('/:id', shopController.getById);
router.get('/get-all', shopController.getAll);
router.put('/:id', shopController.updateById);
router.delete('/:id', shopController.deleteById);

module.exports = router;










