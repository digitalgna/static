import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({ children, backgroundImage, className = '', speed = 0.5 }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <section ref={sectionRef} className={`parallax-section ${className}`}>
      {backgroundImage && (
        <div ref={bgRef} className="parallax-section__background">
          <img src={backgroundImage} alt="" />
          <div className="parallax-section__overlay"></div>
        </div>
      )}
      <div className="parallax-section__content">{children}</div>
    </section>
  );
};

export default ParallaxSection;

