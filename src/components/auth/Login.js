// src/components/auth/Login.js
import React from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// Validación con Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('El nombre de usuario es obligatorio')
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

const Login = () => {
  // Manejo del envío del formulario
  const handleSubmit = (values) => {
    console.log('Formulario Enviado:', values);
    // Aquí puedes hacer la lógica de autenticación (API o validación)
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" align="center">Iniciar Sesión</Typography>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <Field
                  as={TextField}
                  label="Usuario"
                  name="username"
                  fullWidth
                  variant="outlined"
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>

              <Grid item>
                <Field
                  as={TextField}
                  label="Contraseña"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Iniciar Sesión
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
