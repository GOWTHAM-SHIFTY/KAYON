import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const statsData = [
  { label: 'Satisfied clients', value: 190, suffix: '+' },
  { label: 'Projects', value: 2548, suffix: '' },
  { label: 'Years', value: 12, suffix: '+' },
  { label: 'Team members', value: 88, suffix: '' },
];

const StatItem = ({ label, value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    const animateCount = () => {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60 FPS approx
      const update = () => {
        start += increment;
        if (start < value) {
          setCount(Math.floor(start));
          requestAnimationFrame(update);
        } else {
          setCount(value);
        }
      };
      update();
    };

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
          observer.current.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => observer.current?.disconnect();
  }, [value]);

  return (
    <div className="stat-item" ref={ref}>
      <p className="stat-label">{label}</p>
      <h2 className="stat-value">{count.toLocaleString()}{suffix}</h2>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats-container">
      {statsData.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Stats;
