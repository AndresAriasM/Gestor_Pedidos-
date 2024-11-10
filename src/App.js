import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { AuthProvider } from './interfaces/Auth/AuthContext';
import Login from './interfaces/Auth/Login';
import VendedorDashboard from './interfaces/Vendedor/VendedorDashboard';  // Crearemos este componente
import BodegueroDashboard from './interfaces/Bodeguero/BodegueroDashboard';  // Crearemos este componente

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Container component="main" maxWidth="xs">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/vendedor" element={<VendedorDashboard />} />
              <Route path="/bodeguero" element={<BodegueroDashboard />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
