import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes/AppRouter.jsx';
import ReactDOM from 'react-dom/client'
import React from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from './context/isAuthContext.jsx';
import "./styles/Css/style.css"

let theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#C6CAD3",
    },
    background: {
      main:"#8A4F7D",
    },
    black: {
      main: "#0B0F0B"
    },
    error: {
      main: "#d50000",
    },
    success: {
      main: "#2A5426",
    }
  }
})

theme = responsiveFontSizes(theme)


  // * @Compoenente {AppRouter} encargado de realizar la verificación del usuario.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <AppRouter/>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

