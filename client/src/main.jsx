import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes/AppRouter.jsx';
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from './context/isAuthContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

  // * @Compoenente {AppRouter} encargado de realizar la verificación del usuario.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
