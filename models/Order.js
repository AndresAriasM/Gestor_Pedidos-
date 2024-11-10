const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  vendedor: { type: String, required: true },
  items: [
    {
      nombre: { type: String, required: true },
      cantidad: { type: Number, required: true },
    },
  ],
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;