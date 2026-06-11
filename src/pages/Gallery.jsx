import React, { useEffect, useState } from 'react';
import '../css/gallery.css';
import hifzBg from '../../public/assets/hifz.jpg';
import gradBg from '../../public/assets/grad.jpg';
import awarBg from '../../public/assets/award.jpg';
import hstBg from '../../public/assets/hst.jpg';
import schBg from '../../public/assets/sch.jpg';
import qrBg from '../../public/assets/qr.jpg';
import fpBg from '../../public/assets/fp.jpg';
import rmdBg from '../../public/assets/rmd.jpg';
import tjwBg from '../../public/assets/tjw.jpg';
import stdBg from '../../public/assets/std.jpg';
import lectBg from '../../public/assets/lect.jpg';
import onoBg from '../../public/assets/ono.jpg';

const Gallery = () => {
  useEffect(() => {
    document.title = 'AIQM - Gallery | Ali Institute For Qur\'an Memorization';
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hifz', name: 'Hifz Classes' },
    { id: 'graduation', name: 'Graduation Ceremonies' },
    { id: 'boarding', name: 'Boarding Facilities' },
    { id: 'activities', name: 'Student Activities' },
    { id: 'islamic', name: 'Islamic Programs' }
  ];

  const galleryImages = [
    { id: 1, category: 'hifz', title: 'Hifz Class Session', description: 'Students engaged in Qur\'an memorization', image: hifzBg },
    { id: 2, category: 'hifz', title: 'One-on-One Revision', description: 'Teacher guiding student through revision', image: onoBg },
    { id: 3, category: 'graduation', title: 'Graduation Ceremony 2024', description: 'Celebrating our new Huffaz', image: gradBg },
    { id: 4, category: 'graduation', title: 'Award Presentation', description: 'Honoring outstanding students', image: awarBg },
    { id: 5, category: 'boarding', title: 'Hostel', description: 'Comfortable boarding facilities', image: hstBg },
    { id: 6, category: 'boarding', title: 'Madrasah ', description: 'Clean Environment', image: schBg },
    { id: 7, category: 'activities', title: 'Qur\'an Recitation', description: 'Students showcasing their memorization', image: qrBg },
    { id: 8, category: 'activities', title: 'Lecture', description: 'Theoretical knowledge sharing', image: lectBg },
    { id: 9, category: 'islamic', title: 'Friday Prayer', description: 'Jumu\'ah congregation', image: fpBg },
    { id: 10, category: 'islamic', title: 'Ramadan Program', description: 'Special Ramadan activities', image: rmdBg },
    { id: 11, category: 'hifz', title: 'Tajweed Class', description: 'Learning proper pronunciation', image: tjwBg },
    { id: 12, category: 'activities', title: 'Study Session', description: 'Group study and discussion', image: stdBg }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (



    
    <main className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Capturing moments of learning, growth, and achievement</p>
        </div>
      </div>

      <section className="gallery-filters section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-grid-section section">
        <div className="container">
          <div className="masonry-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-image">
                  <img src={image.image} alt={image.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                      <span className="view-btn">View Larger</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;