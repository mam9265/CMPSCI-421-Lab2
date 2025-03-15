const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example:  Michael Myers
 *               email:
 *                 type: string
 *                 example: Michael.Myers@example.com
 *               address:
 *                 type: string
 *                 example: 80 Lincoln Ave, PA
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Bad request
 */

//Create a new Customer
router.post('/', async (req, res) => {
    try{
        const newCustomer = await Customer.create(req.body);
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the customer to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       400:
 *         description: Invalid ID or error occurred
 */
//Delete a Customer
router.delete('/:id', async (req, res) => {
    try {
      await Customer.findByIdAndDelete(req.params.id);
      res.json({ message: 'Customer deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /customers/{id}:
 *   patch:
 *     summary: Update a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the customer to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Michael A Myers
 *               email:
 *                 type: string
 *                 example: MichaelAMyers@example.com
 *               address:
 *                 type: string
 *                 example: 59 Jason St, PA
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Invalid ID or error occurred
 */
// Update a Customer
router.patch('/:id', async (req, res) => {
    try {
      const updatedCustomer= await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedCustomer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});


module.exports = router;