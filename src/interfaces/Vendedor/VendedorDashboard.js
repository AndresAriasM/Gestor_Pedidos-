import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton, Badge, Card, CardContent, CardMedia } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import loginImage from '../../assets/login_image.jpg';

const VendedorDashboard = () => {
  const [width, setWidth] = useState(0); // Estado para controlar la posición en X

  // Lista de categorías
  const categories = ['Inicio', 'Electrónica', 'Ropa', 'Juguetes', 'Hogar', 'Libros', 'Accesorios', 'Deportes'];

  // Lista de productos para mostrar
  const products = [
    { name: 'Producto 1', price: '$100', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 2', price: '$150', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 3', price: '$200', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 4', price: '$250', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 5', price: '$300', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 6', price: '$350', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 7', price: '$400', image: 'https://via.placeholder.com/300' },
    { name: 'Producto 8', price: '$450', image: 'https://via.placeholder.com/300' },
  ];

  // Tamaños de los botones de categorías
  const categoryButtonStyle = {
    fontSize: '1.5rem', // Tamaño de la fuente
    padding: '18px 32px', // Padding
    width: '200px', // Ancho de los botones
  };

  // Configura la posición inicial del menú
  useEffect(() => {
    const initialWidth = -650; // Cambia este valor según el desplazamiento que desees
    setWidth(initialWidth);
  }, []);

  // Función para manejar el clic en la categoría
  const handleCategoryClick = (category) => {
    console.log(`Categoría seleccionada: ${category}`);
  };

  return (
    <Box
    sx={{
      backgroundImage: `url(${loginImage})`, // Establece la imagen de fondo
      backgroundPosition: 'center', // Centra la imagen
      backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
      flexDirection: 'column', // Asegura que los elementos estén en columna (puedes usar 'row' si prefieres)
      alignItems: 'center', // Centra los elementos horizontalmente
    }}
       
    >
      {/* Barra de navegación superior */}
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5', p: 2, width: '430%', transform: `translateX(${width}px)` }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Productos en Tienda</Typography>

          {/* Icono del carrito de compras */}
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCart sx={{ fontSize: '2rem' }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Navegación por categorías */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#3f51b5',
          padding: '12px 0',
          width: '430%',
          transform: `translateX(${width}px)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            onClick={() => handleCategoryClick(category)}
            sx={{
              ...categoryButtonStyle,
              fontWeight: 'bold',
              color: '#ffffff',
              width: '195px',
              fontSize: '1.2rem',
              padding: '10px 20px',
              mx: 1,
              backgroundColor: '#e64a19',
              '&:hover': {
                backgroundColor: '#d32f2f',
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Productos */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: 1.5,
          marginTop: '20px',
          width: '400%',
          transform: `translateX(${-590}px)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {products.map((product) => (
          <Card
            key={product.name}
            sx={{
              maxWidth: 305,
              flex: '1 1 calc(33.33% - 16px)',
              marginBottom: 10,
              boxShadow: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo translúcido para que se vea el fondo de la imagen
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VendedorDashboard;
