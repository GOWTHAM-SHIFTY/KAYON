import React from "react";
import "./ServicesSection.css";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Architectural design",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    number: "02",
    title: "Space planning",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    number: "03",
    title: "Interior design",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h4 className="services-subtitle">OUR SERVICES</h4>
      <h2 className="services-title">Building more than structures</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-info">
              <span className="service-number">{service.number}</span>
              <div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            </div>
            <p className="service-desc">{service.desc}</p>
            <div className="arrow-icon">
              <FiArrowRight className="arrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
