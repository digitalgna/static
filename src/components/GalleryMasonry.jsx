import { useState } from 'react';
import './GalleryMasonry.css';

const GalleryMasonry = ({ images, columns = 3 }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="gallery-masonry" style={{ '--columns': columns }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-masonry__item"
            data-aos="fade-up"
            data-aos-delay={index * 50}
            onClick={() => openLightbox(image)}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} />
            <div className="gallery-masonry__overlay">
              <span className="gallery-masonry__zoom">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox}>
              ×
            </button>
            <img src={lightboxImage} alt="Lightbox" />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryMasonry;

