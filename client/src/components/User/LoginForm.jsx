// @libreria { react-hook-form } encargada de manejar los datos del formulario.
// @documentacion https://react-hook-form.com/get-started
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Alert, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/isAuthContext";
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';


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
                px: 4,
                background: 'linear-gradient(#74456A, #7C356D, #5D2952, #35102D, #050000)',
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
                <img 
                    src="src/assets/logos/nebula_logo.png"
                    alt="Logo de Nebula Wear, tu lugar para puedes comprar ropa de lujo"
                />
            </Box>

            {/* form */}
            <Box
                component="form"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    width: 1,
                    height: "35svh"
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Email"
                    placeholder="youremail@example.com"
                    variant="outlined"
                    color='primary'
                    margin="dense"
                    fullWidth
                    autoFocus
                    autoComplete="email"
                    focused
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon color='primary'/>
                            </InputAdornment>
                        ),
                        style: {color: 'primary.main'}
                    }}
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
                    variant="outlined"
                    color='primary'
                    margin="dense"
                    fullWidth
                    autoComplete="current-password"
                    focused
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon color='primary'/>
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        input: { color: 'primary.main'}
                    }}
                    {...register('password', {
                        required: "Este campo es requerido",
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/,
                    })}
                />

                {(errors.password && <Alert severity="error"> {errors.password.message} </Alert>)}

                  {/* Olvide mi contraseña */}
                  <Button
                    href="/forgotpassword"
                    variant="text"
                    color='primary'
                    size="md"
                    fullWidth
                    sx={{
                        textDecoration: 'underline'
                    }}
                >
                    Olvidaste la contraseña?
                </Button>


                {/* Manual Login*/}
                <Button
                    variant="contained"
                    type="submit"
                    color='black'
                    margin="dense"
                    size="large"
                    sx={{color: 'primary.main', width: 1/2}}

                >
                    Login
                </Button>

            </Box>

            {/* Login with Google */}
            <Button 
                variant="contained"
                onClick={(e) => handleGoogle(e)}
                size="large"
                startIcon={<GoogleIcon />}
                fullWidth
                sx={{borderRadius:10, width: 3/4}}
            >
                
                Continue with Google
            </Button>

            <Button
                href='/register'
                color='primary'
                variant="text"
                size="large"
                fullWidth
                mt={6}
            >
                Aun no tienes cuenta? Registrate
            </Button>
        </Box>
    );
}

export default LoginForm;