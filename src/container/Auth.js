import React from 'react'
import Home from './Home'
import LoginForm from './LoginForm'

function Auth() {
    const user = true
  return (
    <div>
        {
            user ? <LoginForm /> : <Home />
        }
    </div>
  )
}

export default Auth