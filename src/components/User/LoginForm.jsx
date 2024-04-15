// @libreria { react-hook-form } encargada de manejar los datos del formulario.
// @documentacion https://react-hook-form.com/get-started
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // @funcion { OnSubmit } Recibe los datos enviados desde el formulario.
    // @parametro { data } la data que recibe desde el formulario
    // @constante { email } extrae solamente el email de la data
    const onSubmit = (data) => {
        const { email } = data
        console.log(data)
        if (email) {
            return localStorage.setItem("login", email)
        } else false
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
                    {...register('email')}
                />

                <TextField
                    label="Password"
                    placeholder="........."
                    variant="filled"
                    color="success"
                    margin="dense"
                    fullWidth
                    {...register('password')}
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    margin="dense"
                    size="large"
                    fullWidth>
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
                href=''
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