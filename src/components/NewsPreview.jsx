// src/components/NewsPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';

const NewsPreview = () => {
  const previewNews = news.slice(0, 3);

  return (
    <section className="news-preview section">
      <div className="container">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          {previewNews.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-category">{item.category}</div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <div className="news-date">{item.date}</div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/news" className="btn btn-primary">View All News</Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;