const RecoveryPasswordForm = () => {
    return (
        <section className="passwordRecovery">
            <div className="logo">
                <img src="./assets/logos/logo_yard_sale.svg" alt="Logo Yard Sale" />
            </div>

            <article className="content">
                <h1>Password Recovery</h1>
                <p>Inform the email address used to create your account</p>
                <form className="form">
                    <label>
                        Email Address
                    </label>
                    <input type="email" placeholder="youremail@example.com" required />
                        <button>Submit</button>
                </form>
            </article>
            <a href="" className="link">Back to login</a>
        </section>
    );
}

export default RecoveryPasswordForm;