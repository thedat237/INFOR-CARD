import React, {useContext} from 'react'
import "./NavBar.css"
import logo from "../../assets/banner_logo.png"
import { Button, Nav, Navbar, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom"
import AuthContext from '../../context/auth'
import RequireAuth from '../Auth/RequireAuth'

export default function NavBar() {
    const authCtx = useContext(AuthContext)

    // const logOut = () => {
    //     localStorage.clear()
    // }

    return (
                    <Navbar bg="light" expand="lg">
                        
            <Container fluid className="container ml-4">
                <NavLink to='/' className='header-logo '>
                         <img src={logo} className='logo-img'/>
                     </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <ul className="header-menu is-active m-0">
                        <li className="header-menu-item me-4"><Link to="/gioi-thieu" className="header-menu-link text-decoration-none fw-bold fs-6">Giới thiệu</Link></li>
                        <li className="header-menu-item me-4"><Link to="/huong-dan" className="header-menu-link text-decoration-none fw-bold fs-6">Hướng dẫn</Link></li>
                        <li className="header-menu-item me-4"><Link to="/chuc-nang" className="header-menu-link text-decoration-none fw-bold fs-6">Chức năng</Link></li>
                        <li className="header-menu-item"><Link to="/" className="header-menu-link text-decoration-none fw-bold fs-6">Thẻ RGB</Link></li>
                    </ul>
                </Nav>
                {authCtx.user ?
                <>
                                 <div className='p-2 bg-dark text-white rounded'>
                                     {authCtx.user.username}
                                 </div>
                             </>
                             :
                             <NavLink to="/login" className="text-decoration-none">
                                 <button className='btn btn-primary'>Tạo thẻ</button>
                             </NavLink>
                }
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
