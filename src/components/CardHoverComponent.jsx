import React from 'react';
import './CardHoverComponent.css';

const CardHoverComponent = () => {
  const posts = [
    {
      id: 1,
      category: 'Design',
      date: 'Apr 21, 2020',
      title: 'Innovative office spaces for productivity',
      description: 'Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...'
    },
    {
      id: 2,
      category: 'Design',
      date: 'Apr 21, 2020',
      title: 'Sustainable living: Eco-friendly designs',
      description: 'Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...'
    },
    {
      id: 3,
      category: 'Design',
      date: 'Apr 21, 2020',
      title: 'Minimalist interior design trends',
      description: 'Proin faucibus nec mauris a sodales, sed elementum mi tincidunt...'
    }
  ];

  return (
    <section className="blog-section">
        <h4>our blogs</h4>
      <h2 className="section-title">Latest news</h2>
      <div className="cards-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="card-meta">
              <span className="card-category">{post.category}</span>
              <span className="card-date">{post.date}</span>
            </div>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-description">{post.description}</p>
          </article>
        ))}
      </div>
      <button className="more-posts-button">More Post</button>
    </section>
  );
};

export default CardHoverComponent;