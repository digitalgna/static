import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounters = ({ items }) => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const endValue = parseInt(counter.dataset.count);
      const duration = 2;
      const increment = endValue / (duration * 60);

      const animation = gsap.fromTo(
        counter,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: duration,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      const updateCounter = () => {
        const current = Math.min(animation.progress() * endValue, endValue);
        counter.textContent = Math.floor(current);
      };

      animation.eventCallback('onUpdate', updateCounter);
    });
  }, []);

  return (
    <div className="counters">
      {items.map((item, index) => (
        <div key={index} className="counter-item" data-aos="fade-up" data-aos-delay={index * 100}>
          <div
            ref={(el) => (countersRef.current[index] = el)}
            className="counter-number"
            data-count={item.value}
          >
            0
          </div>
          <div className="counter-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounters;

