// src/pages/Admission.jsx
import React, { useState, useEffect } from 'react';
import '../css/admission.css';

const Admission = () => {
  useEffect(() => {
    document.title = 'AIQM - Admission | Apply for Qur\'an Memorization';
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    education: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.parentName) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.reason) newErrors.reason = 'Reason for applying is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Submit to FormSubmit
    const form = e.target;
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        mode: 'no-cors'
      });
      
      setSubmitted(true);
      setFormData({
        fullName: '',
        gender: '',
        dateOfBirth: '',
        parentName: '',
        phone: '',
        email: '',
        address: '',
        education: '',
        reason: ''
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Unable to submit. Please call +234 903 978 5732');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    'Submit Application',
    'Application Review',
    'School Contact',
    'Admission Approval',
    'Payment Instructions'
  ];

  return (
    <main className="admission-page">
      <div className="page-header">
        <div className="container">
          <h1>Admission</h1>
          <p>Begin Your Journey to Becoming a Hafiz/Hafiza</p>
        </div>
      </div>

      <section className="admission-steps section">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">{step}</div>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="admission-form-section section">
        <div className="container">
          <h2 className="section-title">Apply Now</h2>
          
          {submitted && (
            <div className="success-message">
              <h3>✓ Application Submitted Successfully!</h3>
              <p>Thank you for applying to AIQM. Our admissions team will review your application and contact you within 48 hours.</p>
              <p>For urgent inquiries, please call: <strong>+234 903 978 5732</strong></p>
              <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                Submit Another Application
              </button>
            </div>
          )}
          
          {!submitted && (
            <form 
              action="https://formsubmit.co/lamidiabdulhameedolawale@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
              className="admission-form"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="NEW ADMISSION APPLICATION - AIQM" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                  required
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={errors.gender ? 'error' : ''}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <span className="error-text">{errors.gender}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={errors.dateOfBirth ? 'error' : ''}
                  required
                />
                {errors.dateOfBirth && <span className="error-text">{errors.dateOfBirth}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="parentName">Parent/Guardian Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={errors.parentName ? 'error' : ''}
                  required
                />
                {errors.parentName && <span className="error-text">{errors.parentName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 XXX XXX XXXX"
                  className={errors.phone ? 'error' : ''}
                  required
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Residential Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'error' : ''}
                  required
                ></textarea>
                {errors.address && <span className="error-text">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="education">Educational Background</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="Highest level of education"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">Reason For Applying *</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="4"
                  value={formData.reason}
                  onChange={handleChange}
                  className={errors.reason ? 'error' : ''}
                  placeholder="Why do you want to join AIQM?"
                  required
                ></textarea>
                {errors.reason && <span className="error-text">{errors.reason}</span>}
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Admission;