import React from 'react';
import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <Container
      className="my-account-container"
      sx={{
        marginTop: '2%',
        padding: '0 2%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* Contenedor principal con estilos */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          borderRadius: '8px',
          backgroundColor: '#fff',
          padding: '16px',
          boxShadow: 3,
          '@media (max-width:600px)': {
            padding: '1%'
          }
        }}
      >
        {/* Encabezado con el título */}
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
          <Typography variant="h5" sx={{ marginTop: '2%' }}>Mi cuenta</Typography>
        </Box>

        {/* Contenedor de la grilla para organizar los campos */}
        <Grid container spacing={2}>
          {/* Campo de texto para el nombre, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              defaultValue="Ricardo"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para el apellido, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Apellido"
              defaultValue="Sanchez"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para la dirección de email, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Dirección de Email"
              defaultValue="ricardosanchez@gmail.com"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para la contraseña, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contraseña"
              defaultValue="************"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para la dirección, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Dirección"
              defaultValue="Buenos Aires, av.corrientes 5031"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para el celular, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Celular"
              defaultValue="+54 9 11 6785-3323"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para los pedidos, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pedidos"
              defaultValue="Jean Azul"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para los favoritos, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Favoritos"
              defaultValue="Sombrero Italiano"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
          {/* Campo de texto para las reseñas, en modo de solo lectura */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reseñas"
              defaultValue="(ninguna)"
              InputProps={{ readOnly: true }}
              margin="normal"
              sx={{ padding: '8px' }}
            />
          </Grid>
        </Grid>

        {/* Botón para modificar datos, enlazado a la ruta /changeData */}
        <Link to={'/changeData'}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '16px', marginBottom: '16px' }}
          >
            Modificar datos
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default MyAccount;
