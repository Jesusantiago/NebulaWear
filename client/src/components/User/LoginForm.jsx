// @libreria { react-hook-form } encargada de manejar los datos del formulario.
// @documentacion https://react-hook-form.com/get-started
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/isAuthContext";


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
                    Forgot my password
                </Button>

            </Box>

                <Button 
                    class="button-google"
                    onClick={(e) => handleGoogle(e)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                    </svg>
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
                Sign up
            </Button>
        </Box>
    );
}

export default LoginForm;