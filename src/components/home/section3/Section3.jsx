import React from 'react'
import './Section3.css'
import { NavLink } from 'react-router-dom'

const Section3 = () => {
    return (
        <div className='containerSection3Home'>
            <div className='section3Home'>
                <section>
                    <header>
                        <h2>Daily rhythm: clear, warm, playful</h2>
                    </header>
                    <p>Kids thrive when they know what's next — we keep a predictable rhythm with plenty of room for creativity.</p>
                </section>

                <div className='containerArticleSection3'>
                    <article className='article3Section3'>
                        <header>
                            <h3>Morning circle</h3>
                        </header>
                        <p>greetings, feelings, plan</p>
                    </article>

                    <article className='article3Section3'>
                        <header>
                            <h3>Outdoors</h3>
                        </header>
                        <p>movement, nature, sand, discovery</p>
                    </article>

                    <article className='article3Section3'>
                        <header>
                            <h3>Activities</h3>
                        </header>
                        <p>art, language, sensory play, exploration</p>
                    </article>

                    <article className='article3Section3'>
                        <header>
                            <h3>Calm time</h3>
                        </header>
                        <p>rest, books, quiet play</p>
                    </article>

                    <div className='btnSection3Home'>
                        <NavLink className="btnSection3-1" to="/programs">Program details</NavLink>
                        <NavLink className="btnSection3-2" to="/contact">Get a consultation</NavLink>
                    </div>
                </div>
            </div>

            <div>
                <article className='articleSection3Home'>
                    <header>
                        <h3>Stress‑free adaptation</h3>
                    </header>
                    <p>The first days matter — we use a clear plan that works for both children and parents.</p>
                </article>

                <article className='articleSection3Home'>
                    <header>
                        <h3>Healthy environment</h3>
                    </header>
                    <p>Movement, outdoors, creative tools, and clean spaces — without overload, with clear structure.</p>
                </article>

                <div className='containerImgSection3Home'>
                    <img className='imgSection3Home' src="/2.webp" alt="imagen" />
                    <img className='imgSection3Home' src="/1.webp" alt="imagen" />
                    <img className='imgSection3Home' src="/3.webp" alt="imagen" />
                </div>
            </div>
        </div>
    )
}

export default Section3