import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/isAuthContext";
import { Alert, Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email'
import PasswordIcon from '@mui/icons-material/Password'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { handlerErrors } from "../Service/handlerErrors";

const RegisterUser = () => {
    const [error, setError] = useState(null)
    const auth = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    //*@funtion { comparePassword } Función que compara ambas contraseñas para ver si son iguales
    //*@params { p, rp } p = password, rp = repitPassword
    //*Array { handlerErrors} Array de objecto con los distintos tipos de errores que pueden existen en la app

    const comparePassword = (p, rp) => {
        if(p !== rp){
            handlerErrors.find(val=>{
                if(val.value === 401){
                  setError(val)
                }
            })
            return true
        }
        return false
    }

    // *@funcion { OnSubmit } Recibe los datos enviados desde el formulario.
    // *@parametro { data } la data que recibe desde el formulario
    // *@funcion { auth.register } Función que ejecuta el registro en Firebase y server/api

    const onSubmit = async (data) => {
        const { email, password, repitPassword } = data;

        if(comparePassword(password, repitPassword)){
            return
        }

        try {
            const user = await auth.register(email, password);
            const { value } = await user;
            handlerErrors.find(err => {
                if(err.value == value){
                    return setError(err)
                }
            })
        } catch (err) {
            return console.log(err)
        }
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
            { 
                error  && <Alert severity={error.severity}> {error.message} </Alert>        
            }
            
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
                alignItems='center'
                sx={{
                    width: 1,
                    height:'35svh',
                    mb:25
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Email"
                    placeholder="youremail@example.com"
                    variant="outlined"
                    color="primary"
                    margin="dense"
                    fullWidth
                    autoFocus
                    focused
                    autoComplete="Email"
                    InputProps={{
                        startAdornment : (
                            <InputAdornment position="start">
                                <EmailIcon color="primary"/>
                            </InputAdornment>
                        ),
                        style: {color: 'primary.main'}
                    }}
                    sx={{
                        input: { 
                            color: 'primary.main'
                        }
                    }}
                    {...register('email', {
                        required: "Este campo es requerido",
                        pattern: {
                            value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                            message: "Intenta introducir un correo electronico"
                        },

                    })}
                />
                {(errors.email && <Alert severity="error"> {errors.email.message} </Alert>)}

                <TextField
                    label="Contraseña"
                    type="text"
                    placeholder="........."
                    variant="outlined"
                    color="primary"
                    margin="dense"
                    fullWidth
                    autoComplete="password"
                    focused
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon color='primary' />
                            </InputAdornment>
                        ),
                        endAdornment:(
                            <InputAdornment position="end">
                                <VisibilityOff color="primary" />
                            </InputAdornment>
                        ),
                        style: {color: 'primary.main'}
                    }}
                    sx={{
                        input: { 
                            color: 'primary.main'
                        }
                    }}
                    {...register('password', {
                        required: "Este campo es requerido",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/,
                            message: "La contraseña debe de tener un caracter en Mayuscula, uno en miniculas, un numero y al menos un caracter especial"
                        },
                    })}
                />
                {(errors.password && <Alert severity="error"> {errors.password.message } </Alert>)}

                <TextField
                    label="Repite tu contraseña"
                    type="text"
                    placeholder="........."
                    variant="outlined"
                    color="primary"
                    margin="dense"
                    fullWidth
                    autoComplete="current-password"
                    focused
                    InputProps={{
                        startAdornment : (
                            <InputAdornment position="start">
                                <PasswordIcon color="primary" />
                            </InputAdornment>
                        ),
                        endAdornment:(
                            <InputAdornment position="end">
                                <VisibilityOff color="primary" />
                            </InputAdornment>
                        ),
                        style: {color: 'primary.main'}
                    }}
                    sx={{
                        input: { 
                            color: 'primary.main'
                        }
                    }}
                    {...register('repitPassword', {
                        required: "Este campo es requerido",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/,
                            message: "La contraseña debe de tener un caracter en Mayuscula, uno en miniculas, un numero y al menos un caracter especial"
                        },
                    })}
                />
                {(errors.repitPassword && <Alert severity="error"> {errors.repitPassword.message } </Alert>)}

                <Typography color='primary' textAlign='center' sx={{my:3}}>
                    "Por que cada outfit cuenta una historia. <br/> ¡Escribe la tuya con nosotros!"
                </Typography>


                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    margin="dense"
                    size="large"
                >
                    Registrarse
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterUser