const express = require('express');
const router = express.Router();
const Order = require('../models/order');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order with customer details and items.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: string
 *                 example: 67d4cc6fdb5dd84a30f76790
 *                 description: The customer ID who placed the order
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: Nintendo Switch
 *                 description: A list of item IDs that are part of the order
 *               totalAmount:
 *                 type: number
 *                 example: 299.99
 *                 description: The total amount for the order
 *               status:
 *                 type: string
 *                 example: pending
 *                 description: The current status of the order (pending, completed, cancelled)
 *                 enum: [pending, completed, cancelled]
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid data provided
 */
//Create a new Order
router.post('/', async (req, res) => {
    try{
        const newOrder = await Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Fetch all orders placed in the system.
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   customerId:
 *                     type: string
 *                     example: 67d4cc6fdb5dd84a30f76790
 *                   items:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: Nintendo Switch
 *                   totalAmount:
 *                     type: number
 *                     example: 299.99
 *                   status:
 *                     type: string
 *                     example: pending
 *       500:
 *         description: Internal server error
 */
//Get all Orders
router.get('/', async (req, res) => {
    try{
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /orders/{id}:
 *   patch:
 *     summary: Update an order
 *     description: Update an existing order by ID.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the order to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: pending
 *                 description: The new status of the order (pending, completed, cancelled)
 *     responses:
 *       200:
 *         description: The updated order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  customerId:
 *                     type: string
 *                     example: 67d4cc6fdb5dd84a30f76790
 *                  items:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: Nintendo Switch
 *                  totalAmount:
 *                     type: number
 *                     example: 299.99
 *                  status:
 *                     type: string
 *                     example: completed
 *       400:
 *         description: Invalid data provided
 */
//Update an Order
router.patch('/:id', async (req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order
 *     description: Delete an order by ID.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the order to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       400:
 *         description: Invalid data provided
 */
// Delete an Order
router.delete('/:id', async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.json({ message: 'Order deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /orders/process-order:
 *   get:
 *     summary: Process an order asynchronously
 *     description: Simulate an asynchronous operation (order processing).
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Order processed successfully
 *       500:
 *         description: Something went wrong
 */
//Asynchronous Operation
router.get('/process-order', async (req, res) => {
    try {
      console.log('Processing order...');
  
      await new Promise(resolve => setTimeout(resolve, 3000));
  
      res.json({ message: 'Order processed successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

module.exports = router;
