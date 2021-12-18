import React from 'react'
import "./Login.css"
import bannerPeople from "../../assets/banner_people_card.jfif"

export default function Login() {
    return (
        <div className='bg-auth'>
            <section className='Form'>
                <div className='container py-3'>
                    <div className='row '>
                        <div className='col-lg-5 p-0'>
                            <img src={bannerPeople} className='img-fluid login-img'/>
                        </div>
                        <div className='col-lg-7 mt-3'>
                            <h1 className='fw-bold py-3'>Login</h1>
                            <h4>Sign into your account</h4>
                            <form className='my-5'> 
                                <div className='form-row'>
                                    <div className='col-lg-7'>
                                        <input type="email" placeholder='Email-Address'className='form-control my-3 p-3'/>
                                    </div>
                                </div>
                                <div className='form-row mb-5'>
                                    <div className='col-lg-7'>
                                        <input type="password" placeholder='******' className='form-control my-3 p-3'/>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col-lg-7'>
                                        <button type='button' className='btn1'>Login</button>
                                    </div>
                                </div>
                                <p>Dont't have an account? <a href='/'>Register here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
