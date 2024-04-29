import LoginForm from "../components/User/LoginForm";
import RecoveryPasswordForm from "../components/User/RecoveryPasswordForm";
import RegisterUser from "../components/User/RegisterUser";

// @Array { RouterPublic } Array de objecto donde estaran todas las rutas publicas.

let RouterPublic = [
  {
    path: "/login",
    name: "Login",
    component: <LoginForm />,
    status: "Public",
  },
  {
    path: "/forgotpassword",
    name: "Forgot me password",
    component: <RecoveryPasswordForm />,
    status: "Public",
  },
  {
    path: "/register",
    name: "Register",
    component: < RegisterUser />,
    status: "Public",
  },
]

export default RouterPublic;