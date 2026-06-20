import React from 'react'
import './section1About.css'

const About = () => {
    return (
        <div className='containerSection1About'>
            <section>
                <header>
                    <h2>Our mission</h2>
                </header>
                <p>We believe every child deserves a nurturing environment where they can explore, learn, and grow at their own pace.</p>
                <p>Our approach combines structured activities with plenty of time for creative play — building confidence, curiosity, and social skills naturally.</p>
                <p>We work closely with families so each child receives personalized attention and support.</p>
            </section>

            <div>
                <article>
                    <p>+10</p>
                    <header>
                        <h4>Years experience</h4>
                    </header>
                </article>

                <article>
                    <p>12</p>
                    <header>
                        <h4>Team members</h4>
                    </header>
                </article>

                <article>
                    <p>100+</p>
                    <header>
                        <h4>Happy families</h4>
                    </header>
                </article>

                <article>
                    <p>4</p>
                    <header>
                        <h4>Age groups</h4>
                    </header>
                </article>
            </div>
        </div>
    )
}

export default About