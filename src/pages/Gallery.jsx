import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GalleryMasonry from '../components/GalleryMasonry';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const categories = ['all', 'falls', 'tours', 'night', 'attractions'];

  const allImages = [
    { url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800', category: 'falls' },
    { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', category: 'tours' },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'attractions' },
    { url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800', category: 'night' },
    { url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a2e?w=800', category: 'falls' },
    { url: 'https://images.unsplash.com/photo-1531572753323-ad0633dd6615?w=800', category: 'attractions' },
    { url: 'https://images.unsplash.com/photo-1539586341727-0c19f016758e?w=800', category: 'tours' },
    { url: 'https://images.unsplash.com/photo-1519552928909-2ca90b5c3b3f?w=800', category: 'night' },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'falls' },
    { url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800', category: 'attractions' },
    { url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800', category: 'attractions' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', category: 'night' },
    { url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800', category: 'tours' },
    { url: 'https://images.unsplash.com/photo-1531572753323-ad0633dd6615?w=800', category: 'falls' },
    { url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', category: 'attractions' },
    { url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800', category: 'night' },
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'tours' },
    { url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800', category: 'falls' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? allImages.map((img) => img.url)
      : allImages.filter((img) => img.category === selectedCategory).map((img) => img.url);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero__background">
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920"
            alt="Gallery"
          />
        </div>
        <div className="gallery-hero__content">
          <h1>Travel Gallery</h1>
          <p>Capturing the beauty and wonder of Niagara Falls</p>
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

      {/* Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <GalleryMasonry images={filteredImages} columns={3} />
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="section horizontal-scroll-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Featured Moments</h2>
            <p>Scrolling highlights from our travelers' experiences</p>
          </div>
          <div className="horizontal-scroll" data-aos="fade-up">
            {allImages.slice(0, 8).map((image, index) => (
              <div key={index} className="horizontal-scroll__item">
                <img src={image.url} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

