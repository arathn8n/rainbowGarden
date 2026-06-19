import React, { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <div className='bgHeader'>
            <header className='header'>

                {/* TÍTULO */}
                <h1 className='header-title'>
                    Rainbow garden <br />
                    <span className='header-title-span'>Daycare & Early Learning</span>
                </h1>

                {/* BOTÓN HAMBURGUESA */}
                <button className='btnMobile' onClick={handleMenu}>
                    <i className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>


                {/* NAV MOBILE */}
                <nav className={`navMobile ${menu ? 'activeMenu ' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'linkActive' : '')}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'linkActive' : '')}>About</NavLink>
                    <NavLink to="/programs" className={({ isActive }) => (isActive ? 'linkActive' : '')}>Programs</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'linkActive' : '')}>Contact</NavLink>

                    <div className='container-rss-mobile'>
                        <div className='container-phone'>
                            <i className="fa-solid fa-phone"></i>
                            <span>+1 (234) 567-890</span>
                        </div>

                        <div className='container-email'>
                            <i className="fa-solid fa-envelope"></i>
                            <span>support@rainbowgarden.com</span>
                        </div>

                        <NavLink to="/contact" className='btn-contact-mobile'>
                            Book a visit <i className="fa-solid fa-arrow-right"></i>
                        </NavLink>
                    </div>
                </nav>

                {/* NAV DESKTOP */}
                <nav className='navDesktop'>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'linkActive' : '')}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'linkActive' : '')}>About</NavLink>
                    <NavLink to="/programs" className={({ isActive }) => (isActive ? 'linkActive' : '')}>Programs</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'linkActive' : '')}>Contact</NavLink>

                    <div className="containerRss">
                        <div className='container-phone'>
                            <i className="fa-solid fa-phone"></i>
                            <span className='span-phone'>+1 (234) 567-890</span>
                        </div>

                        <div className='container-email'>
                            <i className="fa-solid fa-envelope"></i>
                            <span className='span-email'>support@rainbowgarden.com</span>
                        </div>

                        <NavLink to="/contact" className='btn-contact'>
                            Book a visit <i className="fa-solid fa-arrow-right"></i>
                        </NavLink>
                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Header
