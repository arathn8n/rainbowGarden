import React from 'react'
import './section6.css'
import { NavLink } from 'react-router-dom'

const Section6 = () => {
    return (
        <div className='containerSection6Home'>
            <section>
                <header>
                    <h2>Want to visit us in person?
                    </h2>
                </header>
                <p>Book a visit — we'll show you the rooms, introduce the team, and answer all your questions.</p>
            </section>

            <div>
                <NavLink className="linkSection6" to="/contact">Book a visit</NavLink>
            </div>
        </div>
    )
}

export default Section6