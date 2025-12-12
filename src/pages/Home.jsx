import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTAButton from '../components/CTAButton';
import Card from '../components/Card';
import AnimatedCounters from '../components/AnimatedCounters';
import TestimonialSlider from '../components/TestimonialSlider';
import GalleryMasonry from '../components/GalleryMasonry';
import ParallaxSection from '../components/ParallaxSection';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Hero animation
    if (heroTitleRef.current && heroSubtitleRef.current) {
      const tl = gsap.timeline();
      tl.from(heroTitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          heroSubtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          '.hero__cta',
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        );
    }

    // Parallax background zoom
    const heroImg = document.querySelector('.hero__background img');
    if (heroImg) {
      gsap.to(heroImg, {
        scale: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Stagger animation for cards
    gsap.utils.toArray('.attraction-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.1,
      });
    });
  }, []);

  const attractions = [
    {
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
      title: 'Niagara Falls',
      description: 'Experience the breathtaking power and beauty of the world-famous waterfalls. Feel the mist on your face as millions of gallons cascade over the edge every second, creating one of nature\'s most spectacular displays.',
    },
    {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      title: 'Hornblower Boat Tours',
      description: 'Get up close to the falls with our signature boat tour experience. Journey into the heart of the mist and feel the thunderous roar of the cascading waters as you navigate the powerful currents.',
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Skylon Tower',
      description: '360-degree panoramic views of Niagara Falls from 775 feet above the ground. Dine in the revolving restaurant while enjoying breathtaking vistas of the falls and surrounding landscape.',
    },
    {
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800',
      title: 'Night Illumination',
      description: 'Witness the falls come alive with stunning nighttime light displays. Every evening, the waterfalls are transformed into a mesmerizing canvas of colorful lights, creating a magical spectacle.',
    },
    {
      image: 'https://images.unsplash.com/photo-1531572753323-ad0633dd6615?w=800',
      title: 'Journey Behind the Falls',
      description: 'Explore the tunnels and observation decks that take you behind the thundering curtain of water. Experience the raw power of nature from a unique perspective few ever see.',
    },
    {
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a2e?w=800',
      title: 'Niagara Helicopter Tours',
      description: 'Soar above the falls in a thrilling helicopter adventure. Capture stunning aerial views of all three waterfalls and the magnificent Niagara Gorge from the sky.',
    },
    {
      image: 'https://images.unsplash.com/photo-1539586341727-0c19f016758e?w=800',
      title: 'White Water Walk',
      description: 'Stroll along the boardwalk beside the Class 6 rapids of the Niagara River. Feel the power of the rushing waters as you walk through this natural wonder.',
    },
    {
      image: 'https://images.unsplash.com/photo-1519552928909-2ca90b5c3b3f?w=800',
      title: 'Niagara-on-the-Lake',
      description: 'Discover the charming historic town just 20 minutes away. Explore wineries, boutique shops, and colonial architecture in this picturesque lakeside destination.',
    },
  ];

  const tourPackages = [
    {
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
      title: 'Classic Falls Experience',
      description: 'Full-day tour including boat ride, Skylon Tower, and guided walk.',
      price: '$149',
      badge: 'Popular',
    },
    {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      title: 'Luxury VIP Tour',
      description: 'Premium experience with private guide, helicopter ride, and fine dining.',
      price: '$499',
      badge: 'Premium',
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Romantic Getaway',
      description: 'Perfect for couples with dinner, wine tasting, and sunset views.',
      price: '$299',
      badge: 'Romantic',
    },
    {
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800',
      title: 'Family Adventure',
      description: 'Kid-friendly activities including aquarium, museums, and fun attractions.',
      price: '$199',
      badge: 'Family',
    },
  ];

  const testimonials = [
    {
      text: 'An absolutely magical experience! The tour guides were knowledgeable and the views were spectacular. Highly recommend!',
      name: 'Sarah Johnson',
      role: 'Traveler from Toronto',
    },
    {
      text: 'The luxury VIP tour exceeded all expectations. Worth every penny for the once-in-a-lifetime experience.',
      name: 'Michael Chen',
      role: 'Traveler from Vancouver',
    },
    {
      text: 'Our family had the best time. The kids loved every moment, and we created memories that will last forever.',
      name: 'Emily Rodriguez',
      role: 'Traveler from Montreal',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600',
    'https://images.unsplash.com/photo-1539650116574-75c0c6d73a2e?w=600',
    'https://images.unsplash.com/photo-1531572753323-ad0633dd6615?w=600',
    'https://images.unsplash.com/photo-1539586341727-0c19f016758e?w=600',
    'https://images.unsplash.com/photo-1519552928909-2ca90b5c3b3f?w=600',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
  ];

  const counterItems = [
    { value: 5000, label: 'Happy Travelers' },
    { value: 100, label: 'Tours Completed' },
    { value: 15, label: 'Years of Excellence' },
    { value: 98, label: 'Satisfaction Rate %' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="hero__background">
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
            alt="Niagara Falls"
          />
        </div>
        <div className="hero__content">
          <h1 ref={heroTitleRef} className="hero__title">
            Discover the Majesty of Niagara Falls
          </h1>
          <p ref={heroSubtitleRef} className="hero__subtitle">
            Experience luxury Canadian travel with expertly curated tours and unforgettable
            adventures
          </p>
          <div className="hero__cta">
            <Link to="/tours">
              <CTAButton variant="gold" className="btn--large">
                Explore Tours
              </CTAButton>
            </Link>
            <Link to="/contact" style={{ marginLeft: '1rem' }}>
              <CTAButton variant="outline" className="btn--large">
                Contact Us
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="section attractions-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Top Attractions</h2>
            <p>Discover the most iconic and breathtaking experiences Niagara Falls has to offer</p>
          </div>
          <div className="card-grid">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="attraction-card"
                image={attraction.image}
                title={attraction.title}
                description={attraction.description}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="section tours-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Featured Tour Packages</h2>
            <p>Choose from our carefully curated selection of premium tour experiences</p>
          </div>
          <div className="card-grid">
            {tourPackages.map((tour, index) => (
              <Card
                key={index}
                image={tour.image}
                title={tour.title}
                description={tour.description}
                price={tour.price}
                badge={tour.badge}
                variant="tour"
                className="tour-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/tours">
              <CTAButton variant="primary" className="btn--large">
                View All Tours
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Us</h2>
            <p>Experience the difference of premium travel services</p>
          </div>
          <div className="why-grid">
            <div className="why-item" data-aos="fade-up" data-aos-delay="0">
              <div className="why-icon">✨</div>
              <h3>Premium Experiences</h3>
              <p>Curated tours designed for discerning travelers seeking the extraordinary</p>
            </div>
            <div className="why-item" data-aos="fade-up" data-aos-delay="100">
              <div className="why-icon">👨‍💼</div>
              <h3>Expert Guides</h3>
              <p>Knowledgeable local guides passionate about sharing Niagara's beauty</p>
            </div>
            <div className="why-item" data-aos="fade-up" data-aos-delay="200">
              <div className="why-icon">🛡️</div>
              <h3>Safe & Reliable</h3>
              <p>Your safety and comfort are our top priorities on every journey</p>
            </div>
            <div className="why-item" data-aos="fade-up" data-aos-delay="300">
              <div className="why-icon">⭐</div>
              <h3>5-Star Service</h3>
              <p>Exceptional customer service from booking to the end of your trip</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>What Our Travelers Say</h2>
            <p>Real experiences from real adventurers</p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Travel Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Travel Gallery</h2>
            <p>Capture the beauty and wonder of your Niagara Falls adventure</p>
          </div>
          <GalleryMasonry images={galleryImages} columns={3} />
        </div>
      </section>

      {/* Statistical Counters */}
      <section className="section counters-section">
        <div className="container">
          <AnimatedCounters items={counterItems} />
        </div>
      </section>

      {/* Final CTA */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
        className="cta-section"
      >
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Book your Niagara Falls experience today and create memories that last a lifetime</p>
            <Link to="/contact">
              <CTAButton variant="gold" className="btn--large">
                Book Now
              </CTAButton>
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;

