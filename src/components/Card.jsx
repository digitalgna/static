import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Card = ({
  image,
  title,
  description,
  price,
  badge,
  variant = 'default',
  onClick,
  className = '',
  children,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    if (variant === 'tour' || variant === 'destination') {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [variant]);

  return (
    <div
      ref={cardRef}
      className={`card card--${variant} ${className}`}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {image && (
        <div className="card__image">
          <img src={image} alt={title} />
          {badge && <div className="card__badge">{badge}</div>}
        </div>
      )}
      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {price && <div className="card__price">{price}</div>}
        {children}
      </div>
    </div>
  );
};

export default Card;

