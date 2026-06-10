// src/components/CTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Start Your Qur'an Memorization Journey Today</h2>
        <p>Join AIQM and become part of a legacy of excellence in Qur'anic education</p>
        <Link to="/admission" className="btn btn-primary">Apply for Admission</Link>
      </div>
    </section>
  );
};

export default CTA;