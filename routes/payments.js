const express = require('express');
const router = express.Router();
const Order = require('../models/order');

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment management
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Processes a payment for an order
 *     description: Simulates the processing of a payment for an order and updates its status to 'completed'.
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 example: 67d4e27e2166595715e81c14
 *                 description: The ID of the order for which payment is being processed.
 *     responses:
 *       200:
 *         description: Payment processed successfully and order status updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Order was finished
 *                   description: Success message
 *                 order:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 67d4e27e2166595715e81c14
 *                       description: The order's unique ID
 *                     customerId:
 *                       type: string
 *                       example: 67d4cc6fdb5dd84a30f76790
 *                       description: The customer ID who placed the order
 *                     status:
 *                       type: string
 *                       example: completed
 *                       description: The updated status of the order (should be 'completed')
 *       500:
 *         description: Payment processing failed.
 */
//Processes a payment
router.post('/', async (req, res) => {
    try {
      console.log('Processing payment...');
  
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulated delay
  
      const { orderId } = req.body;
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { status: 'completed' }, { new: true });
  
      res.json({ message: 'Payment processed successfully!', order: updatedOrder });
    } catch (error) {
      res.status(500).json({ error: 'Payment failed' });
    }
  });
  
  module.exports = router;

