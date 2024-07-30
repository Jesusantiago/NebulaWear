// @libreria { react-hook-form } encargada de manejar los datos del formulario.
// @documentacion https://react-hook-form.com/get-started
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/isAuthContext";
import GoogleIcon from '@mui/icons-material/Google';


const LoginForm = () => {
    const [error, setError] = useState(null)
    const auth = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    /*
         @funcion { OnSubmit } Recibe los datos enviados desde el formulario.
         @parametro { data } la data que recibe desde el formulario
         @constante { email } extrae solamente el email de la data
    */
    const onSubmit = (data) => {
        const { email, password } = data;
        auth.login(email, password)
    }

    const handleGoogle = (e) => {
        e.preventDefault()
        auth.loginWithGoogle()
    }
    
    return (    
        <Box
            component="section"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                minHeight: "100svh",
                width: 1,
                py: 6,
                px: 4
            }}
        >
            {/* img */}
            <Box
                component="article"
                display="flex"
                alignItems="end"
                justifyContent="center"

                sx={{
                    minWidth: 1,
                    height: "20svh"
                }}
            >
                <img src="src/assets/logos/logo_yard_sale.svg" />
            </Box>

            {/* form */}
            <Box
                component="form"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{
                    width: 1,
                    height: "35svh"
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Email"
                    placeholder="youremail@example.com"
                    variant="filled"
                    color="success"
                    margin="dense"
                    fullWidth
                    autoFocus
                    autoComplete="email"
                    {...register('email', {
                        required: "Este campo es requerido",
                        pattern: {
                            value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                            message: "Intenta introduciendo un correo electronico"
                        },

                    })}
                />
                {(errors.email && <Alert severity="error"> {errors.email.message} </Alert>)}

                <TextField
                    label="Password"
                    type="password"
                    placeholder="........."
                    variant="filled"
                    color="success"
                    margin="dense"
                    fullWidth
                    autoComplete="current-password"
                    {...register('password', {
                        required: "Este campo es requerido",
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/,
                    })}
                />

                {(errors.password && <Alert severity="error"> {errors.password.message} </Alert>)}

                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    margin="dense"
                    size="large"
                >
                    Login
                </Button>
                <Button
                    href="/forgotpassword"
                    variant="text"
                    color="success"
                    size="md"
                    fullWidth
                >
                    Olvide mi contraseña
                </Button>

            </Box>

                <Button 
                    variant="contained"
                    onClick={(e) => handleGoogle(e)}
                    size="large"
                    startIcon={<GoogleIcon />}
                >
                    
                    Continue with Google
                </Button>

            <Button
                href='/register'
                color='success'
                underline="none"
                variant="outlined"
                size="large"
                fullWidth
                mt={6}
            >
                REGISTRATE
            </Button>
        </Box>
    );
}

export default LoginForm;