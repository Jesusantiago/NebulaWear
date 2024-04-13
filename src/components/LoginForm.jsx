const LoginForm = () => {
    return (
        <section className="login">
            <div className="logo">
                <img src="./assets/logos/logo_yard_sale.svg" alt="Logo Yard Sale" />
            </div>
            <form action="/" className="loginForm">
                <label htmlFor="email" name="email">Email</label>
                <input type="email" placeholder="youremail@example.com" />
                <label htmlFor="password" name="password">Password</label>
                <input type="password" placeholder="********" />
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