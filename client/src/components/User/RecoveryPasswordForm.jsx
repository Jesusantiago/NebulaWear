
import { useForm } from "react-hook-form";

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
            justifyContent="start"
            sx={{
                width: 1,
                height: "100svh",
                py: 12,
                px: 4
            }}
        >
            <Box
                component="section"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    width: 1,
                    height: "60%",
                }}
            >


                <Box
                    component="article"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        width: 1,
                        height: "30%",

                    }}
                >
                    <img src="src/assets/logos/logo_yard_sale.svg" alt="Logo Yard Sale" />
                </Box>

                <Box
                    component="article"
                    sx={{
                        width: 1,
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h1"
                        align="center"
                        fontWeight="700"
                    >
                        Password recovery
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        align="center"
                        mb={2}
                        px={4}
                    >
                        Inform you email address used to create you account
                    </Typography>

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
                            label="Email address"
                            placeholder="youremail@example.com"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            autoFocus
                            type="email"
                            autoComplete="email"
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
                            fullWidth
                            size="large"
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>

                <Box
                    component="article"
                    display="block"
                    width="100%"
                >
                    <Button
                        href="/login"
                        type="button"
                        color="success"
                        variant="text"
                        fullWidth
                    >
                        Back to login
                    </Button>


                </Box>

               
            </Box>

        </Box>
    );
}

export default RecoveryPasswordForm;