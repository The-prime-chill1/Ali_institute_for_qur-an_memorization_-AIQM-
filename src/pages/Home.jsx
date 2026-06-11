import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import '../css/Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'AIQM - Home | Ali Institute For Qur\'an Memorization';
  }, []);

  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Welcome to AIQM</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            We are dedicated to nurturing future Huffaz through knowledge, discipline, and excellence.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;