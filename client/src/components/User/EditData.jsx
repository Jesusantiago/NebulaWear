// src/components/User/ChangeData.jsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Box, Typography, TextField, Button, Alert, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { changeUserData } from '../../components/Service/ServiceApi'; // Importa el servicio

const EditData = () => {
  const [error, setError] = useState(null);
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Inicializa useNavigate  

  // Función para manejar el envío del formulario
  const onSubmit = (data) => {
    // Llama a la función del servicio
    changeUserData(data)
      .then(() => {
        alert('Datos enviados correctamente');
        navigate('/myAccount'); // Redirige al usuario a la ruta deseada
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Container
      className="my-account-container"
      sx={{
        marginTop: '2%',
        padding: '0 2%', // Agrega padding en los lados
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: '100%', // Ancho del formulario
          maxWidth: '1200px', // Tamaño máximo del formulario
          borderRadius: '8px',
          backgroundColor: '#fff',
          padding: '16px', // Agrega padding interno
          boxShadow: 3,
          '@media (max-width:600px)': {
            padding: '1%'
          }
        }}
      >
        {/* Header with title */}
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
          <Typography variant="h6" 
          sx={{
            padding: '10px'
            }}
          >Editar Perfil</Typography>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}

        {/* Grid for input fields */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="nombre"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nuevo Nombre"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.nombre && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="apellido"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nuevo Apellido"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.apellido && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nueva Dirección de Email"
                  margin="normal"
                  type='email'
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.email && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="contraseña"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nueva Contraseña"
                  margin="normal"
                  type="password"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.contraseña && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="direccion"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nueva Dirección"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.direccion && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={12}>
            <Controller
              name="celular"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nuevo Celular"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.celular && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="pedidos"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nuevo Pedido"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.pedidos && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="favoritos"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nuevo Favorito"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.favoritos && <span>Este campo es requerido</span>}
          </Grid>

          <Grid item xs={12} sm={6} md={12}>
            <Controller
              name="reseñas"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  label="Nueva Reseña"
                  margin="normal"
                  sx={{ padding: '8px' }} // Agrega padding interno
                />
              )}
            />
            {errors.reseñas && <span>Este campo es requerido</span>}
          </Grid>
        </Grid>

        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: '16px' }}>
          Guardar
        </Button>
      </Box>
    </Container>
  );
};

export default EditData;
