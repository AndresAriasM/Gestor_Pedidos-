import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login_image2.jpeg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar el mensaje de error
  const { login, isAuthenticated, userRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage(''); // Limpiar el mensaje de error al intentar un nuevo inicio de sesión
    try {
      await login(username, password);
      if (isAuthenticated) {
        if (userRole === 'vendedor') {
          navigate('/vendedor');
        } else if (userRole === 'bodeguero') {
          navigate('/bodeguero');
        }
      } else {
        setErrorMessage('La autenticación falló. Verifica tus credenciales.'); // Mensaje de error si no se autenticó
      }
    } catch (error) {
      setErrorMessage('Error en el login: ' + error.message);
    }
  };

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
      <Paper
        elevation={10}
        sx={{
          padding: 5,
          maxWidth: 400,
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 3,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
          Iniciar Sesión
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Usuario"
              fullWidth
              variant="outlined"
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleLogin}
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
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
