import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ border: '1px solid #ddd', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddToCart(product)}
        >
          Agregar al Carrito
        </Button>
      </Box>
    </Grid>
  );
};

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </Grid>
  );
};

export default ProductList;
