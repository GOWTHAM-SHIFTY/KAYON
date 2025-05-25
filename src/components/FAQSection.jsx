import React, { useState, useEffect } from 'react';
import './FAQSection.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqImage from '../assets/faq.jpeg';

const faqs = [
  {
    question: 'Why hire an architect?',
    answer: 'Architects bring design, efficiency, and expertise to any construction project, ensuring better outcomes.'
  },
  {
    question: 'How much does the project cost?',
    answer: 'Cost depends on size, materials, and scope. Architects can help you plan within your budget.'
  },
  {
    question: 'How long does it all take?',
    answer: 'Timelines vary, but planning and design usually take weeks, followed by months of construction.'
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    setTimeout(() => setVisible(true), 100);
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`faq-container fade-in ${visible ? 'visible' : ''}`}>
      <div className="faq-image">
        <img src={faqImage} alt="FAQ Visual" />
      </div>
      <div className="faq-content">
        <p className="faq-label">QUESTIONS & ANSWERS</p>
        <h2 className="faq-title">Learn more about<br />our project workflow</h2>
        <div className="faq-items">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item" onClick={() => toggle(index)}>
              <div className="faq-question">
                <span>{item.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openIndex === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
