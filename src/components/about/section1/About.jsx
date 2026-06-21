import React from 'react'
import './section1About.css'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className='containerAbout'>
            <div className='containerSection1About'>
                <section className='section1About'>
                    <header>
                        <h2>Our mission</h2>
                    </header>
                    <p>We believe every child deserves a nurturing environment where they can explore, learn, and grow at their own pace.</p>
                    <p>Our approach combines structured activities with plenty of time for creative play — building confidence, curiosity, and social skills naturally.</p>
                    <p>We work closely with families so each child receives personalized attention and support.</p>

                    <div className='containerNavlinkAboutSection1'>
                        <NavLink className='navlinkAboutSection1Book' to="/contact">Book a visit</NavLink>
                        <NavLink className='navlinkAboutSection1Program' to="/programs">Explore programs</NavLink>
                    </div>

                </section>

                <div className='containerArticleAboutSection1'>
                    <article className='articleAbout'>
                        <p className='pArticleAbout'>+10</p>
                        <header>
                            <h4>Years experience</h4>
                        </header>
                    </article>

                    <article className='articleAbout'>
                        <p className='pArticleAbout'>12</p>
                        <header>
                            <h4>Team members</h4>
                        </header>
                    </article>

                    <article className='articleAbout'>
                        <p className='pArticleAbout'>100+</p>
                        <header>
                            <h4>Happy families</h4>
                        </header>
                    </article>

                    <article className='articleAbout'>
                        <p className='pArticleAbout'>4</p>
                        <header>
                            <h4>Age groups</h4>
                        </header>
                    </article>

                    <img className='imgAboutSection1' src="/5.webp" alt="imagen" />
                </div>
            </div>
        </div>
    )
}

export default About