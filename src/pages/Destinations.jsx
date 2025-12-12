import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import './Destinations.css';

const Destinations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const destinations = [
    {
      id: 1,
      name: 'Niagara Falls',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200',
      description:
        'The crown jewel of North America, Niagara Falls is a natural wonder that attracts millions of visitors each year. Experience the thundering power of three magnificent waterfalls.',
      highlights: ['Hornblower Boat Tour', 'Journey Behind the Falls', 'Skylon Tower', 'Illumination'],
    },
    {
      id: 2,
      name: 'Toronto',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200',
      description:
        'Canada\'s largest city, Toronto offers a vibrant urban experience with world-class dining, entertainment, and iconic landmarks like the CN Tower and Royal Ontario Museum.',
      highlights: ['CN Tower', 'Royal Ontario Museum', 'Distillery District', 'Toronto Islands'],
    },
    {
      id: 3,
      name: 'CN Tower',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      description:
        'Standing at 553 meters, the CN Tower is one of the world\'s tallest free-standing structures. Enjoy breathtaking 360-degree views of Toronto and Lake Ontario.',
      highlights: ['Observation Deck', 'EdgeWalk', '360 Restaurant', 'Glass Floor'],
    },
    {
      id: 4,
      name: 'Clifton Hill',
      image: 'https://images.unsplash.com/photo-1531572753323-ad0633dd6615?w=1200',
      description:
        'Niagara Falls\' famous entertainment district, Clifton Hill is packed with attractions, restaurants, museums, and fun activities for the whole family.',
      highlights: ['Ripley\'s Believe It or Not', 'Wax Museums', 'Arcades', 'Dining'],
    },
    {
      id: 5,
      name: 'Ripley\'s Aquarium',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200',
      description:
        'One of North America\'s largest aquariums, featuring over 20,000 aquatic animals and mesmerizing underwater tunnels with sharks and rays.',
      highlights: ['Shark Tunnel', 'Ray Bay', 'Dangerous Lagoon', 'Touch Tanks'],
    },
  ];

  return (
    <div className="destinations">
      {/* Hero */}
      <section className="destinations-hero">
        <div className="destinations-hero__background">
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
            alt="Destinations"
          />
        </div>
        <div className="destinations-hero__content">
          <h1>Explore Destinations</h1>
          <p>Discover the beauty and wonder of Canada's most iconic locations</p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section destinations-grid-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Featured Destinations</h2>
            <p>From natural wonders to urban adventures, explore it all</p>
          </div>
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <div key={destination.id} className="destination-card-wrapper" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card
                  image={destination.image}
                  title={destination.name}
                  description={destination.description}
                  variant="destination"
                  className="destination-card"
                >
                  <div className="destination-details">
                    <h4>Highlights:</h4>
                    <ul className="destination-highlights">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="destination-cta">
                      <CTAButton variant="gold">Explore More</CTAButton>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Explore?</h2>
            <p>Let us create the perfect itinerary for your Canadian adventure</p>
            <Link to="/contact">
              <CTAButton variant="primary" className="btn--large">
                Plan Your Trip
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

