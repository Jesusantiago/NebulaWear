    // *@Objecto { valueObj } - Valores que deben ser presentado en el formulario por cualquier respuesta positiva o negativa. 

    export const handlerErrors = [
        {
            value : 201,
            severity : "success",
            message : "Ahora eres usuario."
        },{
            value: 401,
            severity : "error",
            message : "Las contraseñas no coinciden"
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

    export const errorRegister = {
        "auth/email-already-in-use": "El email ingresado ya se encuentra en uso por otra cuenta",
        "auth/invalid-email": "La dirección de correo no es valida",
        "auth/weak-password": "La contraseña es demasiado debil",
        "auth/operation-not-allowed": "El correo o contraseña no están habilitados" 
    }