import { createContext, useContext, useState } from "react";

export const userContext = createContext({
    user:null,
    logIn:()=>{},
    logOut:()=>{}
})
const USER = {name:'User',isGuestUser : true}
export const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState(USER)
    const logIn = (userName) =>{
        setUser({name:userName,isGuestUser:false})
    }
    const logOut = () =>{
        setUser(USER)
    }
    return (
        <userContext.Provider value={{user,logIn,logOut}}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () =>{
    const {user,logIn,logOut} = useContext(userContext)

    return {
        user,logIn,logOut
    }
}