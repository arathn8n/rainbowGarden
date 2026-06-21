import React from 'react'
import './section4About.css'
const Section4About = () => {
    return (
        <>
            <section className='section4About'>
                <header>
                    <h2>Meet the team</h2>
                </header>
                <p>Experienced educators dedicated to your child's growth</p>

                <div className='containerArticleSection4About'>
                    <article className='articleCardAboutSection4'>
                        <img className='imgSection4About' src="/7.webp" alt="imagen" />
                        <header>
                            <h3>Sarah M.
                            </h3>
                            <span className='spanSection4'>Director & Founder
                            </span>
                        </header>
                        <p>15+ years in early childhood education
                        </p>
                    </article>

                    <article className='articleCardAboutSection4'>
                        <img className='imgSection4About' src="/8.webp" alt="imagen" />
                        <header>
                            <h3>James T.

                            </h3>
                            <span className='spanSection4'>Lead Educator

                            </span>
                        </header>
                        <p>Child development specialist


                        </p>
                    </article>

                    <article className='articleCardAboutSection4'>
                        <img className='imgSection4About' src="/9.webp" alt="imagen" />
                        <header>
                            <h3>Emily R.

                            </h3>
                            <span className='spanSection4'>Toddler Specialist

                            </span>
                        </header>
                        <p>Certified in toddler care
                        </p>
                    </article>
                </div>
            </section>

            <div className='containerTestimonials'>
                <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>
                <i className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i>

                <p>"Rainbow Garden has been a wonderful experience for our family. The team is caring, professional, and truly invested in each child's development. We couldn't be happier."

                </p>

                <p>— Parent of a 3-year-old
                </p>
            </div>
        </>
    )
}

export default Section4About