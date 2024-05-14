import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/isAuthContext";

const RegisterUser = () => {
    const [error, setError] = useState(null)
    const auth = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // *@Objecto { valueObj } - Valores que deben ser presentado en el formulario por cualquier respuesta positiva o negativa. 
    const valueObj = [
        {
            value : 201,
            severity : "success",
            message : "Ahora eres usuario."
        },
        {
            value : 409,
            severity : "error",
            message : "Ya existe una cuentra con este correo."
        },
        {
            value: 500,
            severity : "error",
            message : "Perdón, hemos tenido un problema en nuestro servidor. Por favor intentalo de nuevo"
        }
    ]

    // *@funcion { OnSubmit } Recibe los datos enviados desde el formulario.
    // *@parametro { data } la data que recibe desde el formulario
    // *@funcion { auth.register } Función que ejecuta el registro en Firebase y server/api

    const onSubmit = async (data) => {
        const { email, password, name } = data;
        try {
            const user = await auth.register(email, password, name);
            console.log(user)
            const { value } = await user;
            console.log(user)
            valueObj.find(err => {
                if(err.value == value){
                    return setError(err)
                }
            })
        } catch (err) {
            return false
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
                px: 4
            }}
        >
            {/* title */}
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
                <Typography variant="h1" component="h3">
                    Register
                </Typography>
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
                    label="name"
                    placeholder="your name"
                    value="jesus"
                    variant="filled"
                    color="success"
                    margin="dense"
                    fullWidth
                    autoFocus
                    autoComplete="name"
                    {...register('name', {
                        required: "Este campo es requerido",
                        pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: "Ingrese un nombre valido"
                        },

                    })}
                />
                {(errors.name && <Alert severity="error"> {errors.email.message} </Alert>)}
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
                {(errors.email && <Alert severity="value"> {errors.email.message} </Alert>)}

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
                        // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}/,
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
                    Boton de registrar
                </Button>
                {
                    error && <Alert severity={error.severity}> {error.message}</Alert>
                }
            </Box>


            <Button
                href='/login'
                type="submit"
                color='success'
                underline="none"
                variant="outlined"
                size="large"
                fullWidth
                mt={6}
            >
                Register
            </Button>
        </Box>
    )
}

export default RegisterUser
