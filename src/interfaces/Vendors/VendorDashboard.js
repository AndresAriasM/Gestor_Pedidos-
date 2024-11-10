import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Cart from './Cart';

const VendorDashboard = () => {
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  
  // Lista de productos (en una implementación real, estos vendrían de una API)
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
    // Más productos...
  ];

  // Filtrar productos por categoría y búsqueda
  const filteredProducts = products.filter(product => 
    (category ? product.category === category : true) &&
    (searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
  );

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const handlePlaceOrder = () => {
    // Lógica para enviar el pedido a la bodega
    console.log('Pedido realizado:', cartItems);
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
    </div>
  );
};

export default VendorDashboard;
