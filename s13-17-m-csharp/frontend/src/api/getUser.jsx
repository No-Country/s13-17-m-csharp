const getUser = async () =>{
    try {
        const urlUser = await fetch("https://64ee10061f87218271424186.mockapi.io/data");
        if (!urlUser.ok) {
            throw new Error("error en la ruta del fetch user")
        }
        const jsonUser = await urlUser.json()
        return jsonUser
    } catch (error) {
        console.error(error)
    }
};

export {getUser};