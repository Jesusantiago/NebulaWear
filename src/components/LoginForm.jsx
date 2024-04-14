// @libreria { react-hook-form } encargada de manejar los datos del formulario.
// @documentacion https://react-hook-form.com/get-started
import { useForm } from "react-hook-form";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // @funcion { OnSubmit } Recibe los datos enviados desde el formulario.
    // @parametro { data } la data que recibe desde el formulario
    // @constante { email } extrae solamente el email de la data
    const onSubmit = ( data ) => {
        const { email } = data

        if(email){
            return localStorage.setItem("login", email)
        } else false
    }
    
    return (
        <section className="login">
            <div className="logo">
                <img src="./assets/logos/logo_yard_sale.svg" alt="Logo Yard Sale" />
            </div>

            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email" name="email">Email</label>
                <input type="email" placeholder="youremail@example.com" {...register("email")}/>

                <label htmlFor="password" name="password">Password</label>
                <input type="password" placeholder="********" {...register("password")}/>

                <button type="submit">Login</button>
                <a href="/" className="">Forgot my password</a>
            </form>

            <div className="loginFooter">
                <button>Sign up</button>
            </div>
        </section>
    );
}

export default LoginForm;