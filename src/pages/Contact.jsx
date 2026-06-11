// import React, { useEffect, useState } from 'react';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
// import '../css/contact.css';

// const Contact = () => {
//   useEffect(() => {
//     document.title = 'AIQM - Contact Us | Ali Institute For Qur\'an Memorization';
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
  
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//     setFormData({ name: '', email: '', phone: '', message: '' });
//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <main className="contact-page">
//       <div className="page-header">
//         <div className="container">
//           <h1>Contact Us</h1>
//           <p>Get in touch with us for any inquiries</p>
//         </div>
//       </div>

//       <section className="contact-info-section section">
//         <div className="container">
//           <div className="contact-grid">
//             <div className="contact-details">
//               <div className="info-card">
//                 <FaMapMarkerAlt className="info-icon" />
//                 <h3>Address</h3>
//                 <p>Plot 11-15, Block 7, Oba Akinyele Estate,<br />
//                 Off Olomi-Ayegun Road,<br />
//                 Via Academy-Olomi, Olunde,<br />
//                 Ibadan, Oyo State, Nigeria.</p>
//               </div>
              
//               <div className="info-card">
//                 <FaPhone className="info-icon" />
//                 <h3>Phone Numbers</h3>
//                 <p>+234 903 978 5732<br />
//                 +234 808 654 3371</p>
//               </div>
              
//               <div className="info-card">
//                 <FaEnvelope className="info-icon" />
//                 <h3>Email</h3>
//                 <p>ali.quraninstitute@gmail.com</p>
//               </div>
              
//               <div className="info-card">
//                 <div className="social-icons">
//                   <a href="https://instagram.com/ali_quran_institute" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram />
//                   </a>
//                   <a href="https://facebook.com/aliquraninstitute" target="_blank" rel="noopener noreferrer">
//                     <FaFacebook />
//                   </a>
//                 </div>
//                 <h3>Social Media</h3>
//                 <p>@ali_quran_institute (Instagram)<br />
//                 @aliquraninstitute (Facebook)</p>
//               </div>
//             </div>

//             <div className="contact-form-container">
//               <h2>Send Us a Message</h2>
//               {submitted && (
//                 <div className="success-message">
//                   Message sent successfully! We'll get back to you soon.
//                 </div>
//               )}
//               <form onSubmit={handleSubmit} className="contact-form">
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     rows="5"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Send Message</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="map-section">
//         <div className="container">
//           <h2 className="section-title">Find Us Here</h2>
//           <div className="map-container">
//             <iframe
//               title="AIQM Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126218.27840678928!2d3.856744!3d7.377536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086b%3A0x3b9c4b6c5e8a5f6d!2sIbadan!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
//               width="100%"
//               height="400"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;



// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../css/contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = 'AIQM - Contact Us | Ali Institute For Qur\'an Memorization';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const form = e.target;
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        mode: 'no-cors'
      });
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Unable to send message. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries</p>
        </div>
      </div>

      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <h3>Address</h3>
                <p>Plot 11-15, Block 7, Oba Akinyele Estate,<br />
                Off Olomi-Ayegun Road,<br />
                Via Academy-Olomi, Olunde,<br />
                Ibadan, Oyo State, Nigeria.</p>
              </div>
              
              <div className="info-card">
                <FaPhone className="info-icon" />
                <h3>Phone Numbers</h3>
               <p>
                    +234 903 978 5732<br />
                    +234 808 654 3371<br />
                    +234 803 069 4989
                  </p>
              </div>
              
              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <h3>Email</h3>
                <p>ali.quraninstitute@gmail.com</p>
              </div>
              
              <div className="info-card">
                <div className="social-icons">
                  <a href="https://instagram.com/ali_quran_institute" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com/aliquraninstitute" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </div>
                <h3>Social Media</h3>
                <p>@ali_quran_institute (Instagram)<br />
                @aliquraninstitute (Facebook)</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {submitted && (
                <div className="success-message">
                  <h3>✓ Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {!submitted && (
                <form 
                  action="https://formsubmit.co/ali.quraninstitute@gmail.com" 
                  //  action="https://formsubmit.co/lamidiabdulhameedolawale@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  {/* FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Message - AIQM Website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_replyto" value={formData.email} />
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us Here</h2>
          <div className="map-container">
            <iframe
              title="AIQM Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126218.27840678928!2d3.856744!3d7.377536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086b%3A0x3b9c4b6c5e8a5f6d!2sIbadan!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-where-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;