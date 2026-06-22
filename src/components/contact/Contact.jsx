import React from 'react'
import "./contact.css";

const Contact = () => {
    return (
        <div className='bgContact'>

            <section className='sectionContact'>
                <header>
                    <h2 className='sectionContact-title'>Get in touch
                    </h2>
                </header>
                <p>We're here to help. Reach out with any questions or book a visit to see Rainbow Garden in person.

                </p>


                <div className='contact-grid'>
                    <div className='contact-info'>
                        <article className='contactArticleInfo'>
                            <header>
                                <h3>Visit us</h3>
                            </header>
                            <p>123 Education Street</p>
                            <p className='gray'>Learning City, LC 12345</p>
                        </article>

                        <article className='contactArticleInfo'>
                            <header>
                                <h3>Call us</h3>
                            </header>
                            <p>+1 (234) 567-8890</p>
                            <p className='gray'>Mon-fri: 7:00 - 18:00</p>
                        </article>

                        <article className='contactArticleInfo'>
                            <header>
                                <h3>Email us</h3>
                            </header>
                            <p>info@rainbowgarden.webdev.services</p>
                            <p className='gray'>we reply within 24 hours</p>
                        </article>

                        <article className='contactArticleInfo'>
                            <header>
                                <h3>Opening hours</h3>
                            </header>
                            <p>Mon-fri: 7:00 - 18:00</p>
                            <p>saturday: 8:00 - 14:00</p>
                            <p className='gray'>Sunday: closed</p>
                        </article>
                    </div>

                    <section className='sectionForm'>
                        <header>
                            <h3>Send us a message</h3>
                        </header>
                        <p>Fill out the form below and we'll get back to you as soon as possible.

                        </p>
                        <form className='form'>
                            <div className='containerLabelInput'>
                                <div className='flexLabel'>
                                    <label htmlFor="name">name</label>
                                    <input className='input' type="text" id='name' placeholder='your name' />
                                </div>

                                <div className='flexLabel'>
                                    <label htmlFor="phone">phone</label>
                                    <input className='input' type="number" placeholder='phone' />
                                </div>
                            </div>

                            <div className='containerLabelInput'>
                                <div className='flexLabel'>
                                    <label htmlFor="email">your email</label>
                                    <input className='input' type="email" id="your email" placeholder='your email' />
                                </div>


                                <div className='flexLabel'>

                                    <label htmlFor="age">child's age</label>
                                    <select className='select' name="age" id="age">
                                        <option value="1-2yrs">1-2yrs</option>
                                        <option value="2-4yrs">2-4yrs</option>
                                        <option value="4-6yrs">4-6yrs</option>
                                        <option value="6-12yrs">6-12yrs</option>
                                    </select>
                                </div>
                            </div>

                            <div className='message'>

                                <textarea className='textArea' name="message" id="message" placeholder='your message'></textarea>
                                <button className='btnSubmit' type='submit'>Send Message</button>
                            </div>

                        </form>
                    </section>
                </div>

            </section>
        </div>
    )
}

export default Contact