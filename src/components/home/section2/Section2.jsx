import React from 'react'
import './section2.css'

const Section2 = () => {
    return (
        <section className='section2'>
            <header>
                <h2>Building foundations for the future</h2>
            </header>
            <p>Safety, gentle adaptation, and play-based learning — everyday things that build confidence.</p>

            <div className='containerArticle'>
                <article className='article'>
                    <div className='divIcon'>
                        <i className="fa-solid fa-heart" style={{ color: "rgb(206, 15, 225)" }}></i>
                    </div>
                    <header>
                        <h3>Small groups</h3>
                    </header>
                    <p>More attention for each child — warm connection and clear boundaries.</p>
                </article>

                <article className='article'>
                    <div className='divIcon'>
                        <i className="fa-solid fa-palette" style={{ color: "rgb(206, 15, 225)" }}></i>
                    </div>
                    <header>
                        <h3>Play‑based learning</h3>
                    </header>
                    <p>Curiosity, language, emotions, and creativity — every day, naturally.</p>
                </article>

                <article className='article'>
                    <div className='divIcon'>
                        <i className="fa-solid fa-shield-halved" style={{ color: "rgb(206, 15, 225)" }}></i>
                    </div>
                    <header>
                        <h3>Safety & calm</h3>
                    </header>
                    <p>Safe spaces, routines, and a caring team you can trust.</p>
                </article>
            </div>

        </section>
    )
}

export default Section2