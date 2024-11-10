const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Crear orden
router.post('/', async (req, res) => {
  const { vendedor, items } = req.body;
  try {
    const order = new Order({ vendedor, items });
    await order.save();
    res.status(201).send('Orden creada');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Cambiar estado de la orden
router.patch('/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('Orden no encontrada');

    order.status = status;
    await order.save();
    res.send('Estado de la orden actualizado');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;