    // *@Objecto { valueObj } - Valores que deben ser presentado en el formulario por cualquier respuesta positiva o negativa. 

    export const handlerErrors = [{
            value: 3,
            severity : "success",
            message : "Hemos registrado su correo, por favor verifique su correo en su bandeja de entrada."
        },{
            value: 11,
            severity: "success",
            message: "Revise su bandeja de entrada"
        },{
            value: 12,
            severity: "error",
            message: "Por favor verifique su correo para poder iniciar sesión"
        },{
            value: 16,
            severity : "error",
            message: "El email ingresado ya se encuentra en uso por otra cuenta"
        },{
            value: 17,
            severity : "error",
            message: "La dirección de correo no es valida"
        },{
            value: 18,
            severity : "error",
            message: "La contraseña es demasiado debil"
        },{
            value: 19,
            severity : "error",
            message: "El correo o contraseña no están habilitados" 
        },{
            value: 20,
            severity: "success",
            message: "Correo y contraseña correcta, estas por iniciar sesión"
        },{
            value: 21,
            severity: "error",
            message: "El formato del correo electrónico no es válido"
        },{
            value: 22,
            severity: "error",
            message: "La cuenta de usuario ha sido deshabilitada por un administrador"
        },{
            value: 23,
            severity: "error",
            message: "No hay usuario correspondiente al correo electrónico proporcionado"
        },{
            value: 24,
            severity: "error",
            message: "El correo o contraseña son incorrectos"
        },{
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
        "auth/email-already-in-use": 16,
        "auth/invalid-email": 17,
        "auth/weak-password": 18,
        "auth/operation-not-allowed": 19
    }

    export const errorLogin = {
        "auth/invalid-email" : 21,
        "auth/user-disabled" : 22,
        "auth/user-not-found" : 23,
        "auth/wrong-password" : 24,
    }

    export const errorResetEmail = {
        "auth/invalid-email" : 21,
        "auth/user-not-found" : 23,
    }