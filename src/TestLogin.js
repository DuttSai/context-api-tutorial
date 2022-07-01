import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
function TestLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [userInfo, setUserInfo] = useState()
    const onSubmit = (data) => {
        setUserInfo(data)
    }
    const defaultLoginForm = () => {
        return (<div className='container'>
            <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Registration Form </h1>
                <div className='ui divider'></div>
                <div className='ui form'>
                    <div className='field'>
                        <label>Username</label>
                        <input type='text' {...register("username", { required: 'Username is required' })} placeholder='Username' />

                    </div>
                    <p>{errors.username?.message}</p>
                    <div className='field'>
                        <label>Password</label>
                        <input type='password'  {...register("password", { required: 'Password is required' })} />
                    </div>
                    <p>
                        {errors.password?.message}
                    </p>
                    <button className='fluid ui button blue'>Submit</button>
                </div>
            </form>

        </div>)
    }
    return defaultLoginForm()
}

export default TestLogin