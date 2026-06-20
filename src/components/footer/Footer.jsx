import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='containerFooter'>
            <footer className='footer'>
                <section>
                    <header>
                        <h3>Rainbow garden <br /> daycare</h3>
                    </header>
                    <p>A warm, safe, and playful environment for children: play-based learning, movement, creativity, and calm routines.</p>
                </section>

                <section>
                    <header>
                        <h3>Links</h3>
                    </header>
                    <div className='containerFooterLinks'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about/">About</NavLink>
                        <NavLink to="/programs/">Programs</NavLink>
                        <NavLink to="/contact/">Contact</NavLink>
                    </div>
                </section>

                <section>
                    <header>
                        <h3>Contact</h3>
                    </header>
                    <p><i className="fa-solid fa-location-dot" style={{ color: 'rgb(177, 151, 252)' }}></i> 123 Education Street, Learning City, LC 12345
                    </p>
                    <p><i className="fa-solid fa-phone" style={{ color: 'rgb(177, 151, 252)' }}></i>+1 (234) 567-890</p>
                    <p><i className="fa-solid fa-envelope" style={{ color: 'rgb(177, 151, 252)' }}></i>info@rainbowgarden.webdev.services</p>
                    <p><i className="fa-solid fa-clock" style={{ color: 'rgb(177, 151, 252)' }}></i>Mon–Fri: 7:00–18:00 <br />
                        Sat: 8:00–14:00</p>
                </section>
            </footer>
        </div>
    )
}

export default Footer