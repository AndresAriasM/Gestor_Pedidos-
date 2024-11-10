import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);  // Pasamos el valor de búsqueda al componente principal
  };

  return (
    <Box sx={{ width: '100%', padding: '16px' }}>
      <TextField
        fullWidth
        label="Buscar Producto"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
      />
    </Box>
  );
};

export default SearchBar;
