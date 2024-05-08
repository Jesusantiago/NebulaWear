export const apiRegister = async (user) => {
    return await fetch(import.meta.env.VITE_Back + "auth/register", {
        method : "POST",
        credentials: "include",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            id: user.uid,
            name: user.name,
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
