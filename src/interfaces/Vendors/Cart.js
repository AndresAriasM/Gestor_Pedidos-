import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Cart = ({ cartItems, onPlaceOrder }) => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, right: 0, padding: 2, width: 300, backgroundColor: 'white', boxShadow: 3 }}>
      <Typography variant="h6">Carrito de Compras</Typography>
      {cartItems.length === 0 ? (
        <Typography>No hay productos en el carrito.</Typography>
      ) : (
        cartItems.map((item, index) => (
          <Box key={index} sx={{ paddingBottom: 1 }}>
            <Typography>{item.name} x {item.quantity}</Typography>
          </Box>
        ))
      )}
      <Button variant="contained" color="primary" onClick={onPlaceOrder}>
        Confirmar Pedido
      </Button>
    </Box>
  );
};

export default Cart;
