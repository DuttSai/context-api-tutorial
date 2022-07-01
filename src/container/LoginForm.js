import React from 'react'
import {useForm} from 'react-hook-form'
function LoginForm() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data) => {
        console.log('Form data',data)
    }
  return (
    <div className='login'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <label>Username</label>
                    <input {...register('username',required='Username is required')} placeholder='Username' />
                </div>
                <p>{errors.username?.message}</p>
                <div className='field'>
                    <label>Password</label>
                    <input {...register('password',required='Password is required')} placeholder='Password' />
                </div>
                <p>{errors.password?.message}</p>
                <button className='fluid ui button blue'>Submit</button>                
            </div>
        </form>
        
    </div>
  )
}

export default LoginForm