import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CTAButton = ({ children, className = '', href, onClick, variant = 'primary', type = 'button' }) => {
  const buttonRef = useRef(null);
  const magneticArea = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const buttonClasses = `btn btn--${variant} btn--magnetic ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        ref={buttonRef}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      ref={buttonRef}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;

