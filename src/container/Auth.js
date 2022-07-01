import React from 'react'
import { useUserContext } from '../context/userContext'
import Home from './Home'
import LoginForm from './LoginForm'

function Auth() {
    const {user} = useUserContext() 
    return <>{user.isGuestUser ? <LoginForm /> : <Home />}</>

}

export default Auth