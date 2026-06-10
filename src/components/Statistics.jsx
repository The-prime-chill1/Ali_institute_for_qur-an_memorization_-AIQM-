// src/components/Statistics.jsx
import React from 'react';
import '../css/home.css';

const Statistics = () => {
  const stats = [
    { number: 500, label: 'Students Enrolled' },
    { number: 250, label: 'Qur\'an Graduates' },
    { number: 15, label: 'Years Of Excellence' },
    { number: 35, label: 'Qualified Teachers' }
  ];

  return (
    <section className="statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}+</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;