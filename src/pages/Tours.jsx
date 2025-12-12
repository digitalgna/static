import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import './Tours.css';

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const categories = ['all', 'day', 'night', 'luxury', 'family'];

  const tours = [
    {
      id: 1,
      category: 'day',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
      title: 'Classic Falls Experience',
      description: 'Full-day comprehensive tour including Hornblower boat ride, Skylon Tower observation deck, Journey Behind the Falls, and guided walking tour.',
      price: '$149',
      badge: 'Popular',
      duration: '8 hours',
      included: ['Boat tour tickets', 'Tower access', 'Guided tour', 'Lunch'],
      notIncluded: ['Hotel pickup', 'Dinner'],
    },
    {
      id: 2,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      title: 'Luxury VIP Tour',
      description: 'Premium experience with private guide, helicopter tour over the falls, exclusive boat access, fine dining at Skylon Tower, and luxury transportation.',
      price: '$499',
      badge: 'Premium',
      duration: 'Full day',
      included: ['Private guide', 'Helicopter tour', 'VIP boat access', 'Fine dining', 'Luxury transport'],
      notIncluded: [],
    },
    {
      id: 3,
      category: 'family',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Family Adventure Package',
      description: 'Kid-friendly activities including Ripley\'s Aquarium, Niagara Falls History Museum, Clifton Hill attractions, and family-friendly dining options.',
      price: '$199',
      badge: 'Family',
      duration: '7 hours',
      included: ['Aquarium tickets', 'Museum access', 'Theme park rides', 'Lunch'],
      notIncluded: ['Dinner', 'Additional attractions'],
    },
    {
      id: 4,
      category: 'night',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800',
      title: 'Romantic Evening Experience',
      description: 'Perfect for couples with sunset views, illuminated falls tour, wine tasting at local vineyards, and romantic dinner with falls view.',
      price: '$299',
      badge: 'Romantic',
      duration: '5 hours',
      included: ['Evening tour', 'Wine tasting', 'Romantic dinner', 'Transportation'],
      notIncluded: ['Hotel pickup'],
    },
    {
      id: 5,
      category: 'day',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a2e?w=800',
      title: 'Adventure Explorer',
      description: 'Thrilling experience with Whirlpool Aero Car, White Water Walk, Butterfly Conservatory, and zipline adventure.',
      price: '$249',
      badge: 'Adventure',
      duration: '6 hours',
      included: ['Aero Car ride', 'White Water Walk', 'Butterfly Conservatory', 'Zipline'],
      notIncluded: ['Meals'],
    },
    {
      id: 6,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1531572753323-ad0633dd6615?w=800',
      title: 'Ultimate Luxury Package',
      description: 'The most exclusive experience with private helicopter charter, VIP dinner, spa treatment, and luxury hotel accommodation.',
      price: '$999',
      badge: 'Ultimate',
      duration: '2 days',
      included: ['Private helicopter', 'VIP dinner', 'Spa treatment', 'Luxury hotel', 'All meals'],
      notIncluded: [],
    },
  ];

  const filteredTours = selectedCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  return (
    <div className="tours">
      {/* Hero */}
      <section className="tours-hero">
        <div className="tours-hero__background">
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
            alt="Niagara Falls Tours"
          />
        </div>
        <div className="tours-hero__content">
          <h1>Tours & Packages</h1>
          <p>Discover the perfect Niagara Falls experience for you</p>
        </div>
      </section>

      {/* Filters */}
      <section className="section filters-section">
        <div className="container">
          <div className="filters" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section tours-grid-section">
        <div className="container">
          <div className="tours-grid">
            {filteredTours.map((tour, index) => (
              <div key={tour.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card
                  image={tour.image}
                  title={tour.title}
                  description={tour.description}
                  price={tour.price}
                  badge={tour.badge}
                  variant="tour"
                  className="tour-detail-card"
                >
                  <div className="tour-details">
                    <div className="tour-duration">
                      <strong>Duration:</strong> {tour.duration}
                    </div>
                    <div className="tour-included">
                      <h4>Included:</h4>
                      <ul>
                        {tour.included.map((item, idx) => (
                          <li key={idx}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                    {tour.notIncluded.length > 0 && (
                      <div className="tour-not-included">
                        <h4>Not Included:</h4>
                        <ul>
                          {tour.notIncluded.map((item, idx) => (
                            <li key={idx}>✗ {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="tour-cta">
                      <CTAButton variant="primary" onClick={() => alert('Booking feature coming soon!')}>
                        Book Now
                      </CTAButton>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Night vs Day */}
      <section className="section comparison-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Day vs Night Experience</h2>
            <p>Choose the perfect time to witness the falls' magic</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-card" data-aos="fade-up" data-aos-delay="0">
              <div className="comparison-icon">☀️</div>
              <h3>Day Tours</h3>
              <p>
                Experience the falls in natural daylight with crystal-clear views of the cascading
                waters. Perfect for photography, family visits, and adventure activities.
              </p>
              <ul>
                <li>Best for photography</li>
                <li>Family-friendly activities</li>
                <li>Clear visibility</li>
                <li>All attractions open</li>
              </ul>
            </div>
            <div className="comparison-card" data-aos="fade-up" data-aos-delay="100">
              <div className="comparison-icon">🌙</div>
              <h3>Night Tours</h3>
              <p>
                Witness the falls illuminated by spectacular colored lights, creating a magical and
                romantic atmosphere. Perfect for couples and special occasions.
              </p>
              <ul>
                <li>Romantic atmosphere</li>
                <li>Stunning light displays</li>
                <li>Less crowded</li>
                <li>Unique perspectives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;

