import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Section2 from '../section2/section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'
import Section5 from '../section5/Section5'
import Section6 from '../section6/Section6'

const Home = () => {
    return (
        <main className='main'>
            <section className='heroWidth'>
                <div>
                    <p className='heroP'>Rainbow Garden • Daycare & Early Learning</p>
                    <header>
                        <h2 className='heroTitle'>Here little minds <br />shine bright</h2>
                    </header>
                    <p className='heroP2'>Play-based learning with creativity and movement. <br /> Small groups, clear routines, and a warm team.</p>

                    <div className='heroBtn'>
                        <Link to="/contact" className='heroLink'>Book a visit</Link>
                        <Link to="/programs" className='heroLink2'>View programs</Link>
                    </div>
                </div>

                <div className='heroImg'>
                    <div className='containerImg'>
                        <img className='heroImg1' src="/1.webp" alt="imagen 1 de niños jugando" />
                    </div>
                    <div className='containerImg'>
                        <img className='heroImg2' src="/2.webp" alt="imagen 2 de niños jugando" />
                    </div>
                    <div className='containerImg'>
                        <img className='heroImg3' src="/3.webp" alt="imagen 3 de niños jugando" />
                    </div>
                </div>

                <div>
                    <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                    <span>parent rating * gentle adpatation</span>
                </div>

            </section>

            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </main>
    )
}

export default Home