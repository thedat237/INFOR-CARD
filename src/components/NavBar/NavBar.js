import React from 'react'
import "./NavBar.css"
import logo from "../../assets/banner_logo.png"
import { Button } from 'react-bootstrap'
import {NavLink} from "react-router-dom"

export default function NavBar() {
    return (
        <div className="d-flex align-items-center">
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center header-navbar-menu p-3 nav-bar">
                    <NavLink to='/' className='header-logo '>
                        <img src={logo} className='logo-img'/>
                    </NavLink>

                    <ul class="header-menu is-active">
                        <li class="header-menu-item">
                            <NavLink to="/" className="header-menu-link text-decoration-none">
                                Giới thiệu
                            </NavLink>
                        </li>
                        <li class="header-menu-item">
                            <NavLink to="/" className="header-menu-link text-decoration-none">Hướng dẫn</NavLink>
                        </li>
                        <li class="header-menu-item">
                            <NavLink to="/" className="header-menu-link text-decoration-none">Chức năng</NavLink>
                        </li>
                        <li class="header-menu-item">
                            <NavLink to="/" className="header-menu-link text-decoration-none">Thẻ RGB</NavLink>
                        </li>
                    </ul>
                    
                    <Button variant="primary">Thẻ Luxry</Button>
                </div>
            </div>
        </div>
    )
}