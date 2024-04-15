import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";

const RecoveryPasswordForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm()

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
                        
                    >
                        <TextField
                            label="Email address"
                            placeholder="youremail@example.com"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            autoFocus
                            required
                            {...register("email")}
                        />
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