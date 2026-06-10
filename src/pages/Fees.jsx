// src/pages/Fees.jsx
import React, { useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../css/fees.css';

const Fees = () => {
  useEffect(() => {
    document.title = 'AIQM - Fees Structure | Ali Institute For Qur\'an Memorization';
  }, []);

  const feeStructure = [
    { item: 'Admission Form', amount: '₦5,000' },
    { item: 'Uniform (4 Pairs)', amount: '₦32,000' },
    { item: 'Female Jumu\'ah Wear', amount: '₦5,000' },
    { item: 'Student ID', amount: '₦2,500' },
    { item: 'Base Termly Fees', amount: '₦125,000' }
  ];

  return (
    <main className="fees-page">
      <div className="page-header">
        <div className="container">
          <h1>Fees Structure</h1>
          <p>Transparent and Affordable Fee Structure</p>
        </div>
      </div>

      <section className="fees-table-section section">
        <div className="container">
          <div className="fees-card">
            <h2>Fee Breakdown</h2>
            <div className="fee-items">
              {feeStructure.map((fee, index) => (
                <div key={index} className="fee-row">
                  <span className="fee-item">{fee.item}</span>
                  <span className="fee-amount">{fee.amount}</span>
                </div>
              ))}
            </div>
            
            <div className="notice-box">
              <h3>Important Notice</h3>
              <p>Payments are not processed through this website. Applicants and parents should contact the school administration for payment instructions after admission approval.</p>
            </div>
            
            <div className="contact-buttons">
              <a href="tel:+2349039785732" className="btn btn-secondary">
                <FaPhone /> Call School
              </a>
              <a href="https://wa.me/2349039785732" className="btn btn-primary">
                <FaWhatsapp /> WhatsApp School
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fees;