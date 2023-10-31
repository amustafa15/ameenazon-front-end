export default {
    login: (loginData) => {
        const reqOptions = {
            method: 'POST',
            headers: { 'accept':'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        };

        fetch('http://localhost:3001/auth/login', reqOptions)
            .then(res => res.json())
            .then(data => {return data})
    },

    signup: () => {
        navigate("/signup")
    },

    thing: () => {
        login()
            .then(setIsLoggedIn(true))
            .then(navigate("/"))
    },

    other: () => {
        setIsLoggedIn(false)
            .then(navigate("/"))
    }
}