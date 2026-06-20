import React from 'react'
import './Section4.css'
import { NavLink } from 'react-router-dom'

const Section4 = () => {
    return (
        <div className='containerSection4Home'>
            <section>
                <header>
                    <h2>Programs by age</h2>
                </header>
                <p>The right pace for each stage — clear structure and plenty of play.</p>

                <div className='containerArticleSection4'>
                    <article className="cardSection4">
                        <img className='imgSection4' src="/1.webp" alt="imagen" />
                        <header>
                            <h3>Toddlers</h3>
                            <p>1-2yrs</p>
                        </header>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Gentle adaptation</p>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Sensory play</p>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Language development</p>
                        <div>
                            <NavLink className="linkSection4" to="/contact">Ask about availability</NavLink>
                        </div>
                    </article>

                    <article className="cardSection4">
                        <img className='imgSection4' src="/4.webp" alt="imagen" />
                        <header>
                            <h3>Explorers</h3>
                            <p>2-4yrs</p>
                        </header>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Social skills</p>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Music & movement
                        </p>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Creative workshops
                        </p>
                        <div>
                            <NavLink className="linkSection4" to="/contact">Ask about availability</NavLink>
                        </div>
                    </article>

                    <article className="cardSection4">
                        <img className='imgSection4' src="/3.webp" alt="imagen" />
                        <header>
                            <h3>Pre‑K</h3>
                            <p>4-6yrs</p>
                        </header>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Playful STEM</p>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>Letters & numbers

                        </p>
                        <p><span><i className="fa-solid fa-circle-check" style={{ color: "rgb(177, 151, 252)" }}></i></span>School readiness
                        </p>
                        <div>
                            <NavLink className="linkSection4" to="/contact">Ask about availability</NavLink>
                        </div>
                    </article>
                </div>
            </section>


        </div>
    )
}

export default Section4