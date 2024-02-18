const getProfile = async () => {
    try {
        const res = await fetch('https://64ee10061f87218271424186.mockapi.io/medic');
        if (!res.ok) {
            throw new Error('error en la ruta de fetch');
        }
        const jsonData = await res.json();
        return jsonData
    } catch (error) {
        console.error(error);
    }
};

export {getProfile};