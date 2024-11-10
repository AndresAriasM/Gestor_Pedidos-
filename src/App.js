// src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme';  // Asegúrate de que `theme` esté correctamente exportado desde src/theme/index.js
import Login from './interfaces/Auth/Login';  // Importa el componente de autenticación como ejemplo

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Login /> {/* Aquí muestras la interfaz de Login o cualquier otro componente */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
