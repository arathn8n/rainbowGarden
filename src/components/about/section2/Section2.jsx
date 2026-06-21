import React from 'react'
import './section2About.css'
const Section2 = () => {
    return (
        <div className='containerAboutSection2'>
            <section>
                <header>
                    <h2>What guides us</h2>
                </header>
                <p>Four principles that shape everything we do — from how we design spaces to how we interact with families.</p>


                <div className='containerArticleAbout'>
                    <article className='articleAboutSection2'>
                        <header>
                            <i className="fa-solid fa-shield-halved" style={{ color: "rgb(177, 151, 252)" }}></i>
                            <h3>Safety first</h3>
                        </header>
                        <p>Clear rules, secure spaces, and trained staff</p>
                    </article>

                    <article className='articleAboutSection2'>
                        <i className="fa-solid fa-heart" style={{ color: "rgb(177, 151, 252)" }}></i>
                        <header>
                            <h3>Warm care
                            </h3>
                        </header>
                        <p>Every child feels valued and seen

                        </p>
                    </article>

                    <article className='articleAboutSection2'>
                        <i className="fa-solid fa-graduation-cap" style={{ color: "rgb(177, 151, 252)" }}></i>
                        <header>
                            <h3>Play-based learning</h3>
                        </header>
                        <p>Creativity, curiosity, exploration

                        </p>
                    </article>

                    <article className='articleAboutSection2'>
                        <i className="fa-solid fa-people-group" style={{ color: "rgb(177, 151, 252)" }}></i>
                        <header>
                            <h3>Family partnership
                            </h3>
                        </header>
                        <p>Ongoing communication and shared goals

                        </p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Section2