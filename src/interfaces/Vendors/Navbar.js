import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

const categories = ["Electrónica", "Ropa", "Alimentos", "Hogar"];

const Navbar = ({ onCategoryChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (category) => {
    onCategoryChange(category);  // Pasamos la categoría seleccionada al componente principal
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Plataforma de Vendedores
        </Typography>
        <Button color="inherit" onClick={handleMenuClick}>
          Categorías
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
        >
          {categories.map((category) => (
            <MenuItem key={category} onClick={() => handleCategorySelect(category)}>
              {category}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
