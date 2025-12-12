import { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion__item">
          <div
            className={`accordion__header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <h3>{item.question}</h3>
          </div>
          <div className={`accordion__content ${activeIndex === index ? 'active' : ''}`}>
            <div className="accordion__body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

