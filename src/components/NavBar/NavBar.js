import React, {useContext} from 'react'
import "./NavBar.css"
import logo from "../../assets/banner_logo.png"
import { Button } from 'react-bootstrap'
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom"
import AuthContext from '../../context/auth'
import RequireAuth from '../Auth/RequireAuth'

export default function NavBar() {
    const authCtx = useContext(AuthContext)

    const logOut = () => {
        localStorage.clear()
    }

    return (
        <div className="d-flex align-items-center">
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center header-navbar-menu p-3 nav-bar">
                    <NavLink to='/' className='header-logo '>
                        <img src={logo} className='logo-img'/>
                    </NavLink>

                    {/* <RequireAuth mode="hidden"> */}
                        <ul class="header-menu is-active m-0">
                            <li class="header-menu-item">
                                <Link to="/gioi-thieu" className="header-menu-link text-decoration-none fw-bold fs-6">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li class="header-menu-item">
                                <Link to="/huong-dan" className="header-menu-link text-decoration-none fw-bold fs-6">Hướng dẫn</Link>
                            </li>
                            <li class="header-menu-item">
                                <Link to="/chuc-nang" className="header-menu-link text-decoration-none fw-bold fs-6">Chức năng</Link>
                            </li>
                            <li class="header-menu-item">
                                <NavLink to="/" className="header-menu-link text-decoration-none fw-bold fs-6">Thẻ RGB</NavLink>
                            </li>
                        </ul>
                        
                        {authCtx.user ? 
                            <>
                                {/* <span>{authCtx.user.username}</span> */}
                                <div className='p-2 bg-dark text-white rounded'>
                                    {authCtx.user.username}
                                </div>
                            </>
                            :
                            <NavLink to="/login" className="text-decoration-none">
                                <button className='btn btn-primary'>Tạo thẻ</button>
                            </NavLink>
                        }
                    {/* </RequireAuth> */}
                </div>
            </div>
        </div>
    )
}