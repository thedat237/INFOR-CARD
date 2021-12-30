import { useState } from "react"
import axios from "../../util/http"
import { useNavigate } from "react-router-dom"
import bannerPeople from '../../assets/banner_people_card.jfif'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onRegisterSubmit = async e => {
        e.preventDefault()
        await axios.post('/auth/register', {
            username: username,
            password: password
        })
        // console.log(res);
        navigate('/login')
    }

    // const onLoginSubmit = async (e) => {
    //     e.preventDefault()
    //     try{
    //         const response = await axios.post("/login", {
    //             username: username,
    //             password: password
    //         })
    //         authCtx.setUser(response.data.user)
    //         localStorage.setItem("token", response.data.token)
    //         addJwt(response.data.token)
    //     } catch (err) {
    //         alert("Wrong username or password")
    //     }
    // }


    return (
        <div className='bg-dark'>
            <section className='form'>
                <div className='container py-4'>
                    <div className='form-login fluid row p-0'>
                        <div className='col-lg-5 p-3'>
                            <img src={bannerPeople} className='login-img'/>
                        </div>
                        <div className='col-lg-7 mt-3'>
                            <h1 className='fw-bold py-3'>Register</h1>
                            <h4>Register your account</h4>
                            <form className='my-5' onSubmit={onRegisterSubmit}> 
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
                                            Register
                                        </button>
                                    </div>
                                </div>
                                <p>Do you already have an account? <a href='/login'>Login here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
