import { useState, createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

    // USER STATE - rummer data hvis en bruger er logget ind
    const [user, setUser] = useState("admin");

    // Login-funktion (matcher brugernavn og password)
    let signIn = (username, password) => {
        if (username === "admin" && password === "999") {
            setUser(username)
        } else {
            setUser(null);
        }
    }

    // Logout-funktion
    let signOut = () => {
        setUser(null);
    }

    // Return - der der så udbydes
    return (
        <LoginContext.Provider value={{ user, signIn, signOut }}>
            { props.children }
        </LoginContext.Provider>
    )

}

export default LoginContextProvider