import React from 'react';

const Contact = () => {
    return (
        <>
            <main>
                <div className="top-part">
                    <h1>Contact Us 🐈‍⬛</h1>
                </div>

                <div className="contact-section">
                    <div className="map">
                        <iframe
                            title="Google Map of Cat A Burger Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118370.687270074!2d129.6257013519514!3d36.558208731612105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e75608700001%3A0x9186921177c13f4e!2z44Gt44GT44Go44Kr44OV44Kn5aSn6Ziq5aSp546L5a-65bqX!5e0!3m2!1sen!2sus!4v1749646638656!5m2!1sen!2sus"
                            width="600" 
                            height="450" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className="contact-info">
                        <div className="contact">
                            <h2>Visit Cat A Burger!</h2>
                            <p>Phone: +1 (234) 567 8910 </p>
                        </div>

                        <form className="contact-form" action="#">
                            <h3>Meow at Us 🐾</h3>
                            <label htmlFor="name">Name 😸 </label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />

                            <label htmlFor="email">Email 😺 </label>
                            <input type="email" id="email" name="email" placeholder="Your email" required />

                            <label htmlFor="message">Meowsage 😼 </label>
                            <textarea id="message" name="message" placeholder="Your message" rows="3" required></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
