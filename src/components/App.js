// src/App.js
import React from 'react';
import { CssBaseline, Container, ThemeProvider } from '@mui/material';
import theme from '../theme';  // src/theme.js
import Login from './auth/Login';  // Asegúrate de que Login.js esté dentro de src/components/auth/


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Esto aplica los estilos globales de Material UI */}
      <Container component="main" maxWidth="xs">
        <Login /> {/* Componente de autenticación */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
