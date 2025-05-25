import React, { useState } from "react";
import "../components/Testimonialsection.css";
import testimonialImage from "../assets/testimonial.jpg";




const testimonials = [
  {
    name: "Flora Hawkins",
    location: "Edison, NJ",
    image: "https://i.pravatar.cc/60?img=45",
    quote:
      "Sed id semper risus in hendrerit gravida rutrum quisque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.",
    subquote:
      "Commodo elit at imperdiet dui accumsan sit amet. Aliquam etiam erat velit scelerisque in dictum non rhoncus urna neque viverra justo.",
  },
  {
    name: "Gabriella Perry",
    location: "Ames, IA",
    image: "https://i.pravatar.cc/60?img=46",
    quote:
      "Diam phasellus vestibulum lorem sed risus ultricies tristi que nulla aliquet. Faucibus vitae aliquet nec ullamcorper sit.",
    subquote:
      "Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ridiculus mus mauris vitae ultricies nullam eget felis.",
  },
];

const TestimonialSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="testimonial-container">
    
      <div className="testimonial-left">
        <div className="testimonial-slider">
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="section-title">Our clients say</h2>
          <div className="quote-icon">“</div>
          <p className="testimonial-main">{current.quote}</p>
          <p className="testimonial-sub">{current.subquote}</p>
          <div className="author-info">
            <img src={current.image} alt={current.name} />
            <div>
              <h4>{current.name}</h4>
              <p>{current.location}</p>
            </div>
          </div>

          <div className="slider-buttons">
            <button onClick={prevTestimonial}>&larr;</button>
            <button onClick={nextTestimonial}>&rarr;</button>
          </div>
        </div>
      </div>

   
      <div className="testimonial-right">
        {!showVideo ? (
          <div className="video-thumbnail" onClick={() => setShowVideo(true)}>
          <img src={testimonialImage} alt="Modern building" />

            <div className="play-button">&#9658;</div>
          </div>
        ) : (
          <div className="video-modal">
            <div className="video-wrapper">
              <button
                className="close-button"
                onClick={() => setShowVideo(false)}
              >
                ✖
              </button>
              <iframe
                src="https://youtu.be/Ff-AtyZtSeE?si=ZwMnVZ9UEDLX5Z7W"
                title="Show reel"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
