import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRouter from './routes/AppRouter.jsx';

//@Compoenente {AppRouter} encargado de realizar la verificación del usuario.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CssBaseline />
    <AppRouter/>

  </React.StrictMode>,
)
