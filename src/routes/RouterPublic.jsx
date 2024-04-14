import LoginForm from "../components/LoginForm";

// @Array { RouterPublic } Array de objecto donde estaran todas las rutas publicas.

let RouterPublic = [
    {
      path: "/login",
      name: "Login",
      component: <LoginForm/>,
      
    },{
        path: "/createUser",
        name: "Create user",
        component: <LoginForm/>
        
      },
]

export default RouterPublic;