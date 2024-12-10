import React, { useEffect, useState, useRef } from 'react';
import './ContactUs.css';
import servicesBg from '../images/servicesbg.jpg';
import review1 from '../images/review1.jpg';

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const reviews = [
        { text: 'The team at BritGuarding is fantastic! Their professionalism and attention to detail are unmatched.', author: 'John Doe', image: review1 },
        { text: "I felt safe and secure knowing BritGuarding was handling our event's security.", author: 'Jane Smith', image: review1 },
        { text: 'Their customer service is top-notch, and they truly care about their clients.', author: 'Mike Johnson', image: review1 },
    ];

    return (
        <section className="contact-us" ref={sectionRef}>
            <div className="contact-us-overlay"></div>
            <div className="contact-us-content">
                {/* Social Icons */}
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div className={`contact-us-container ${isVisible ? 'visible' : ''}`}>
                    <h2 className={`contact-us-title ${isVisible ? 'visible' : ''}`}>
                        <i
                            className="fa-regular fa-envelope"
                            style={{
                                background: 'linear-gradient(to right, hsl(248, 65%, 52%), hsl(251, 66%, 36%), hsl(255, 68%, 20%))',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        ></i> Contact Us
                    </h2>
                    <p className={`contact-us-description ${isVisible ? 'visible' : ''}`}>
                        We are here to assist you. Please fill out the form below or contact us directly using the information provided.
                    </p>
                    <form className={`contact-us-form ${isVisible ? 'visible' : ''}`}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="contact-us-btn">Send Message</button>
                    </form>
                </div>
            </div>
            <section className={`review-section ${isVisible ? 'visible' : ''}`}>
                <h2 className="review-title">What Our Clients Say</h2>
                <div className="reviews-container">
                    {reviews.map((review, index) => (
                        <div className={`review-card ${isVisible ? 'visible' : ''}`} key={index}>
                            <img src={review.image} alt={`${review.author}`} className="review-image" />
                            <p className="review-text">"{review.text}"</p>
                            <p className="review-author">– {review.author}</p>
                            <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default ContactUs;
