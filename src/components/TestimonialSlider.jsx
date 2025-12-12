import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './TestimonialSlider.css';

const TestimonialSlider = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [currentIndex]);

  return (
    <div className="testimonial-slider">
      <div className="testimonial-slider__wrapper">
        <div ref={sliderRef} className="testimonial-slider__track">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slider__slide">
              <div className="testimonial-card">
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">{testimonial.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    ) : (
                      <div className="testimonial-card__avatar-placeholder">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{testimonial.name}</div>
                    <div className="testimonial-card__role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-slider__dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-slider__dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

