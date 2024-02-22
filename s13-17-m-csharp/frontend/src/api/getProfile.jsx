const getProfile = async () => {
    try {
        const urlProfile = await fetch('https://64ee10061f87218271424186.mockapi.io/medic');
        if (!urlProfile.ok) {
            throw new Error('error en la ruta de fetch profile');
        }
        const jsonProfile = await urlProfile.json();
        return jsonProfile
    } catch (error) {
        console.error(error);
    }
};

export {getProfile};