
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import PersonIcon from '@mui/icons-material/Person';

const RecoveryPasswordForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        const { email } = data
        console.log("Correo de Recovery Password: " + email)
    }

    return (
        <Box
            component="section"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
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
                    height: "20svh",
                }}
            >
                <img 
                    src="src/assets/logos/nebula_logo.png"
                    alt="Logo de Nebula Wear, tu lugar para puedes comprar ropa de lujo"
                />
            </Box>

            {/* form */}
            <Box
                component="article"
                sx={{
                    width: 1,
                    height: '35svh'
                }}
            >
                <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width:1,
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        label="Email"
                        type="email"
                        placeholder="youremail@example.com"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        fullWidth
                        autoFocus
                        focused
                        autoComplete="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon color='primary'/>
                                </InputAdornment>
                            ),
                            style: {color: 'primary.main'}
                        }}
                        sx={{
                            mb:7,
                            input: { 
                                color: 'primary.main'
                            }
                        }}
                        {...register('email' ,{
                            required : "Este campo es requerido",
                            pattern : {
                                value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                                message: "Intenta introduciendo un correo electronico"    
                            },
                            
                        })}
                    />

                        { ( errors.email && <Alert severity="error" fullWidth> {errors.email.message} </Alert> ) }

                    <Button
                        href=""
                        type="submit"
                        color="success"
                        variant="contained"
                        size="large"
                        sx={{
                            width:1/2
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>

            <Box
                component="article"
                display="block"
                width="100%"
                size='large'
                sx={{
                    mb:7
                }}
            >
                <Button
                    href="/login"
                    type="button"
                    color="primary"
                    variant="text"
                    fullWidth
                    sx={{
                        textDecoration: 'underline'
                    }}
                >
                    Back to login
                </Button>


            </Box>
        </Box>
    );
}

export default RecoveryPasswordForm;