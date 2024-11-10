const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
const uri = "mongodb+srv://invetra_admin:invetra123@invetra01.6h2ue.mongodb.net/?retryWrites=true&w=majority&appName=invetra01";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect(err => {
  if (err) {
    console.error('Error al conectar a MongoDB', err);
    process.exit(1);
  } else {
    console.log('Conectado a MongoDB');
  }
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});