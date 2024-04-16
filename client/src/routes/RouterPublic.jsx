import LoginForm from "../components/User/LoginForm";
import RecoveryPasswordForm from "../components/User/RecoveryPasswordForm";

// @Array { RouterPublic } Array de objecto donde estaran todas las rutas publicas.

let RouterPublic = [
    {
      path: "/login",
      name: "Login",
      component: <LoginForm/>,
      status: "Public",
    },{
        path: "/forgotpassword",
        name: "Forgot me password",
        component: <RecoveryPasswordForm/>,
        status: "Public",

      },
]

export default RouterPublic;