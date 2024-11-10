// src/interfaces/Auth/Login.js
import React from 'react';
import { Box, Paper, Typography, TextField, Button, Grid } from '@mui/material';
import loginImage from '../../assets/login_image2.jpeg'; // Asegúrate de que la ruta sea correcta

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `url(${loginImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Papel con efecto de sombra */}
      <Paper
        elevation={10} // Sombra más pronunciada
        sx={{
          padding: 5,
          maxWidth: 400,
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fondo blanco con algo de transparencia
          borderRadius: 3,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Sombra sutil
        }}
      >
        {/* Título del login */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            marginBottom: 4,
            color: '#333', // Color del texto
          }}
        >
          Iniciar Sesión
        </Typography>

        {/* Formulario de login */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Usuario"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                borderRadius: '5px',
                backgroundColor: '#fafafa',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3f51b5',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                borderRadius: '5px',
                backgroundColor: '#fafafa',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3f51b5',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '5px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#2c387e',
                },
              }}
            >
              Ingresar
            </Button>
          </Grid>

          {/* Enlaces para registro y recuperación de contraseña */}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
