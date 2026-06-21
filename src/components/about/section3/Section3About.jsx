import React from 'react'
import './section3About.css'
import { NavLink } from 'react-router-dom'

const Section3About = () => {
    return (
        <div className='containerSection3About'>
            <div className='cardsAboxAbout'>
                <article className='articleAboutSection3'>
                    <i class="fa-solid fa-face-grin" style={{ color: "rgb(177, 151, 252)" }}></i>
                    <header>
                        <h3>Stress-free adaptation
                        </h3>
                    </header>
                    <p>The first days matter — we use a clear plan that works for both children and parents.

                    </p>
                </article>

                <article className='articleAboutSection3'>
                    <i class="fa-solid fa-apple-whole" style={{ color: "rgb(177, 151, 252)" }}></i>
                    <header>
                        <h3>Healthy environment
                        </h3>
                    </header>
                    <p>Movement, outdoors, creative tools — without overload, with clear structure.

                    </p>
                </article>

                <img className='imgAbout' src="/6.webp" alt="imagen" />
            </div>

            <section className='section3About'>
                <header>
                    <h2>Our approach to learning
                    </h2>
                </header>
                <p>Children learn best through hands-on exploration and meaningful play. Our curriculum integrates cognitive, social, and emotional development naturally.

                </p>

                <div className='checkList'>


                    <div className='check'>
                        <span><i class="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i> Small group sizes for attention
                        </span>

                        <span><i class="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i> Safe, stimulating environments
                        </span>

                        <span><i class="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i> Clear routines and structure
                        </span>

                    </div>

                    <div className='check'>
                        <span><i class="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i>Experienced, caring educators
                        </span>

                        <span><i class="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i>Daily parent communication

                        </span>

                        <span><i class="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i>Creative play every day
                        </span>
                    </div>

                </div>
                <div className='containerLinkAbout'>

                    <NavLink to="/programs">See our programs</NavLink>
                </div>
            </section>
        </div >
    )
}

export default Section3About