import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParallaxSection from '../components/ParallaxSection';
import Card from '../components/Card';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Timeline animation
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }
  }, []);

  const teamMembers = [
    {
      name: 'James Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Passionate about sharing the beauty of Niagara Falls with travelers worldwide.',
    },
    {
      name: 'Sarah Williams',
      role: 'Tour Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      description: 'Expert in crafting unforgettable travel experiences for over 10 years.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Guide',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      description: 'Local expert with deep knowledge of Niagara Falls history and attractions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      description: 'Dedicated to ensuring every guest has a perfect experience.',
    },
  ];

  const values = [
    { icon: '🎯', title: 'Excellence', description: 'We strive for perfection in every detail' },
    { icon: '💎', title: 'Luxury', description: 'Premium experiences for discerning travelers' },
    { icon: '❤️', title: 'Passion', description: 'Genuine love for travel and discovery' },
    { icon: '🤝', title: 'Integrity', description: 'Honest, transparent, and trustworthy service' },
  ];

  const timeline = [
    { year: '2009', title: 'Foundation', description: 'Yeha Niagara Tour & Travel was founded with a vision to provide premium travel experiences.' },
    { year: '2012', title: 'Expansion', description: 'Expanded our tour offerings to include luxury packages and VIP experiences.' },
    { year: '2015', title: 'Recognition', description: 'Awarded "Best Tour Company" by Niagara Tourism Board for three consecutive years.' },
    { year: '2020', title: 'Innovation', description: 'Introduced virtual tours and enhanced safety protocols for modern travelers.' },
    { year: '2024', title: 'Today', description: 'Continuing to set the standard for luxury travel experiences in Canada.' },
  ];

  return (
    <div className="about">
      {/* Hero */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
        className="about-hero"
      >
        <div className="container">
          <div className="about-hero-content" data-aos="fade-up">
            <h1>About Yeha Niagara</h1>
            <p>Your Trusted Partner in Luxury Canadian Travel</p>
          </div>
        </div>
      </ParallaxSection>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content" data-aos="fade-up">
            <h2>Our Story</h2>
            <p>
              Since 2009, Yeha Niagara Tour & Travel has been dedicated to providing exceptional
              travel experiences that showcase the natural beauty and wonder of Niagara Falls and
              the surrounding region. What started as a small family business has grown into one of
              Canada's most trusted names in luxury tourism.
            </p>
            <p>
              We believe that travel should be transformative, inspiring, and above all, memorable.
              Every tour we craft is designed with meticulous attention to detail, ensuring that our
              guests experience the very best that this iconic destination has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Journey</h2>
            <p>Milestones in our commitment to excellence</p>
          </div>
          <div ref={timelineRef} className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card" data-aos="fade-up" data-aos-delay="0">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create unforgettable travel experiences that connect people with the natural
                wonders of Niagara Falls, delivered with exceptional service and attention to detail.
              </p>
            </div>
            <div className="mission-card" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To become Canada's premier luxury travel company, recognized globally for excellence
                in creating transformative travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Meet Our Team</h2>
            <p>The passionate professionals behind every exceptional journey</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                image={member.image}
                title={member.name}
                description={
                  <>
                    <strong>{member.role}</strong>
                    <br />
                    {member.description}
                  </>
                }
                variant="default"
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

