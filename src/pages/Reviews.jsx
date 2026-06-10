import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import '../css/reviews.css';
// import rvwBg from '../assets/rvw.jpg';

const Reviews = () => {
  useEffect(() => {
    document.title = 'AIQM - Student Reviews | Ali Institute For Qur\'an Memorization';
  }, []);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Atiya Kolawole',
      role: 'Hafidh Graduate',
      rating: 5,
      comment: 'AIQM transformed my relationship with the Qur\'an and strengthened my Islamic character. The teachers are dedicated and the environment is spiritually uplifting.',
      date: 'December 2019',
      initial: 'AK'
    },
    {
      id: 2,
      name: 'Afif Kolawole',
      role: 'Hafidh Graduate',
      rating: 4.5,
      comment: 'The structured revision system helped me retain everything I memorized. The daily, weekly, and monthly revision schedules are very effective.',
      date: 'November 2022',
      initial: 'AK'
    },
    {
      id: 3,
      name: 'Muhsin Kolawole',
      role: 'Hafidh Graduate',
      rating: 5,
      comment: 'The teachers were patient and supportive throughout my Hifz journey. I completed my memorization in just 2 years with their guidance.',
      date: 'October 2022',
      initial: 'MK'
    },
    {
      id: 4,
      name: 'Azeemah  Olaniyan',
      role: 'Hafidh Graduate',
      rating: 5,
      comment: 'AIQM provided a disciplined environment that made memorization easier for my daughter. I highly recommend this institute.',
      date: 'September 2020',
      initial: 'AO'
    },
    {
      id: 5,
      name: 'Abulrasheed Taoheed',
      role: 'Alumni',
      rating: 5,
      comment: 'The combination of Qur\'an memorization and moral training was life-changing. AIQM builds both knowledge and character.',
      date: 'August 2021',
      initial: 'AT'
    },
    {
      id: 6,
      name: 'Fatimah Bello',
      role: 'Current Student',
      rating: 3,
      comment: 'I love the supportive environment and the focus on proper Tajweed. My recitation has improved tremendously.',
      date: 'July 2026',
      initial: 'FB'
    },
    {
      id: 7,
      name: 'Umar Abdullahi',
      role: 'Current Student',
      rating: 2.5,
      comment: 'The boarding facilities are excellent and the revision system ensures you never forget what you\'ve memorized.',
      date: 'June 2024',
      initial: 'UA'
    },
    {
      id: 8,
      name: 'Aisha Suleiman',
      role: 'Parent',
      rating: 5,
      comment: 'My son has become more disciplined and focused since joining AIQM. The Islamic character building is outstanding.',
      date: 'May 2024',
      initial: 'AS'
    },
    {
      id: 9,
      name: 'Aminah Odunsi',
      role: 'Hafidh Graduate',
      rating: 5,
      comment: 'AIQM provided a disciplined environment that made memorization easier for me. I highly recommend this institute.',
      date: 'May 2021',
      initial: 'AS'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [selectedReview, setSelectedReview] = useState(null);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="star-half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-empty" />);
      }
    }
    return stars;
  };

  const getRatingCount = (rating) => {
    return reviews.filter(review => Math.floor(review.rating) === rating).length;
  };

  return (
    <main className="reviews-page">
      <div className="page-header">
        <div className="container">
          <h1>Student & Parent Reviews</h1>
          <p>What our community says about AIQM</p>
        </div>
      </div>

      <section className="reviews-summary section">
        <div className="container">
          <div className="summary-card">
            <div className="average-rating">
              <div className="rating-number">{averageRating.toFixed(1)}</div>
              <div className="rating-stars">{renderStars(averageRating)}</div>
              <div className="rating-count">Based on {reviews.length} reviews</div>
            </div>
            <div className="rating-breakdown">
              {[5, 4, 3, 2, 1].map(star => {
                const count = getRatingCount(star);
                const percentage = (count / reviews.length) * 100;
                return (
                  <div key={star} className="rating-bar">
                    <span className="rating-label">{star} stars</span>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className="rating-count-badge">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="all-reviews section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="review-card"
                onClick={() => setSelectedReview(review)}
              >
                <div className="review-header">
                  <div className="reviewer-initial">{review.initial}</div>
                  <div className="reviewer-info">
                    <h3>{review.name}</h3>
                    <p className="reviewer-role">{review.role}</p>
                  </div>
                </div>
                <div className="review-stars">{renderStars(review.rating)}</div>
                <p className="review-comment">"{review.comment}"</p>
                <div className="review-date">{review.date}</div>
                <div className="quote-icon">“</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedReview && (
        <div className="modal-overlay" onClick={() => setSelectedReview(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedReview(null)}>×</button>
            <div className="modal-review-header">
              <div className="reviewer-initial large">{selectedReview.initial}</div>
              <div>
                <h2>{selectedReview.name}</h2>
                <p className="reviewer-role">{selectedReview.role}</p>
              </div>
            </div>
            <div className="review-stars large">{renderStars(selectedReview.rating)}</div>
            <p className="modal-review-comment">"{selectedReview.comment}"</p>
            <div className="review-date">{selectedReview.date}</div>
          </div>
        </div>
      )}

      <section className="leave-review section">
        <div className="container">
          <div className="review-cta">
            <h2>Share Your Experience</h2>
            <p>Have you studied at AIQM? We'd love to hear about your journey.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/contact'}>
              Leave a Review
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;