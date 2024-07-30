export const apiRegister = async (user) => {
    return await fetch(import.meta.env.VITE_Back + "auth/register", {
        method : "POST",
        credentials: "include",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            id: user.uid,
            name: user.displayName,
            email: user.email
        })
    })
    .then((res) => {
        return res.status 
    })
    .then((data) => {
        return data
    })

}


// src/services/ChangeDataService.js

export const changeUserData = async (user) => {
    return await fetch(import.meta.env.VITE_Back + "api/changeUserData", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      return res.status;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error('Error al guardar los datos');
    });
  };
  
