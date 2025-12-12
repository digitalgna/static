import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQAccordion from '../components/FAQAccordion';
import CTAButton from '../components/CTAButton';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', detail: 'Niagara Falls, Ontario, Canada' },
    { icon: '📞', title: 'Phone', detail: '+1 (555) 123-4567' },
    { icon: '✉️', title: 'Email', detail: 'info@yehaniagara.com' },
    { icon: '🕒', title: 'Hours', detail: 'Mon-Sun: 9:00 AM - 6:00 PM' },
  ];

  const faqs = [
    {
      question: 'What is included in the tour packages?',
      answer:
        'Most packages include transportation, guided tours, attraction tickets, and meals as specified. Please check individual tour details for complete inclusions.',
    },
    {
      question: 'Do you offer hotel pickup?',
      answer:
        'Yes, we offer hotel pickup for most tours in the Niagara Falls area. Please specify your hotel location when booking.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Full refunds are available for cancellations made 48 hours before the tour. Cancellations within 48 hours are subject to a 50% fee.',
    },
    {
      question: 'Are tours suitable for children?',
      answer:
        'Yes, we offer family-friendly tours suitable for all ages. Some tours have age restrictions for safety reasons, which are clearly indicated.',
    },
    {
      question: 'Do you offer private tours?',
      answer:
        'Yes, we offer private and VIP tours for groups. Contact us for custom pricing and itinerary options.',
    },
    {
      question: 'What should I bring on the tour?',
      answer:
        'We recommend comfortable walking shoes, weather-appropriate clothing, camera, and any personal items you may need. Waterproof gear is provided for boat tours.',
    },
  ];

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__background">
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
            alt="Contact Us"
          />
        </div>
        <div className="contact-hero__content">
          <h1>Get In Touch</h1>
          <p>We're here to help plan your perfect Niagara Falls adventure</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info" data-aos="fade-up">
              <h2>Contact Information</h2>
              <p>
                Have questions or ready to book? We're here to help you plan an unforgettable
                experience.
              </p>
              <div className="contact-info__items">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info__item">
                    <div className="contact-info__icon">{info.icon}</div>
                    <div>
                      <h4>{info.title}</h4>
                      <p>{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-social">
                <a href="#" aria-label="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="100">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <CTAButton type="submit" variant="primary" className="btn--large">
                  Send Message
                </CTAButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Find Us</h2>
            <p>Visit our office in the heart of Niagara Falls</p>
          </div>
          <div className="map-wrapper" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.556724579887!2d-79.08215568471649!3d43.09632347929914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3445eec824db9%3A0x46d2c56b2faf7596!2sNiagara%20Falls%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Niagara Falls Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our tours and services</p>
          </div>
          <div className="faq-wrapper" data-aos="fade-up">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

