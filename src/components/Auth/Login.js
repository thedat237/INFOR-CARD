import React, { useState, useContext } from 'react'
import "./Login.css"
import bannerPeople from "../../assets/banner_people_card.jfif"
import axios, { addJwt } from "../../util/http"
import AuthContext from '../../context/auth'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    const onLoginSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post("/login", {
                username: username,
                password: password
            })
            authCtx.setUser(response.data.user)
            localStorage.setItem("token", response.data.token)
            addJwt(response.data.token)
        } catch (err) {
            alert("Wrong username or password")
        }
    }

    if(authCtx.user) {
        return <Navigate to="/tao-the" replace={true} />
    }

    return (
        <div className='bg-dark'>
            <section className='form'>
                <div className='container py-4'>
                    <div className='form-login fluid row p-0'>
                        <div className='col-lg-5 p-3'>
                            <img src={bannerPeople} className='login-img'/>
                        </div>
                        <div className='col-lg-7 mt-3'>
                            <h1 className='fw-bold py-3'>Login</h1>
                            <h4>Sign into your account</h4>
                            <form className='my-5' onSubmit={onLoginSubmit}> 
                                <div className='form-row'>
                                    <div className='col-lg-10'>
                                        <input  
                                            placeholder='Email-Address'
                                            className='form-control my-3 p-3'
                                            value={username}
                                            onChange={(e) =>{
                                                setUsername(e.target.value)}}
                                        />
                                    </div>
                                </div>
                                <div className='form-row mb-5'>
                                    <div className='col-lg-10'>
                                        <input type="password" 
                                            placeholder='******' 
                                            className='form-control my-3 p-3'
                                            value={password}
                                            onChange={(e) =>{
                                                setPassword(e.target.value)}}
                                        />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col-lg-10'>
                                        <button className='btn1'>
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <p>Dont't have an account? <a href='/register'>Register here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

