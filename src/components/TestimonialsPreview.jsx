// src/components/TestimonialsPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { reviews } from '../data/reviews';

const TestimonialsPreview = () => {
  const previewReviews = reviews.slice(0, 3);

  return (
    <section className="testimonials-preview section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          {previewReviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-initials">
                {review.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="testimonial-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} color="#C9A227" />
                ))}
              </div>
              <p className="testimonial-comment">"{review.comment}"</p>
              <h4 className="testimonial-name">{review.name}</h4>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/reviews" className="btn btn-outline">Read All Reviews</Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;