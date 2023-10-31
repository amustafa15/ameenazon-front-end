import React, {useState, useEffect, useContext} from "react";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState("")
    const [token, setToken] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState()

    const value = {
        authUser, 
        setAuthUser, 
        isLoggedIn, 
        setIsLoggedIn
    }

    useEffect(() => {

        if (isLoggedIn === true) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}