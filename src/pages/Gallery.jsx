import React, { useEffect, useState } from 'react';
import '../css/gallery.css';

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
    { id: 1, category: 'hifz', title: 'Hifz Class Session', description: 'Students engaged in Qur\'an memorization', image: 'https://images.unsplash.com/photo-1584551246679-258d1e3c2865?w=600' },
    { id: 2, category: 'hifz', title: 'One-on-One Revision', description: 'Teacher guiding student through revision', image: 'https://images.unsplash.com/photo-1582653291997-079a1f04e6a1?w=600' },
    { id: 3, category: 'graduation', title: 'Graduation Ceremony 2024', description: 'Celebrating our new Huffaz', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600' },
    { id: 4, category: 'graduation', title: 'Award Presentation', description: 'Honoring outstanding students', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600' },
    { id: 5, category: 'boarding', title: 'Student Dormitory', description: 'Comfortable boarding facilities', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600' },
    { id: 6, category: 'boarding', title: 'Dining Hall', description: 'Healthy meals for students', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
    { id: 7, category: 'activities', title: 'Qur\'an Competition', description: 'Students showcasing their memorization', image: 'https://images.unsplash.com/photo-1542816417-0983c9c9adbc?w=600' },
    { id: 8, category: 'activities', title: 'Sports Activity', description: 'Physical education and recreation', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600' },
    { id: 9, category: 'islamic', title: 'Friday Prayer', description: 'Jumu\'ah congregation', image: 'https://images.unsplash.com/photo-1584551246679-258d1e3c2865?w=600' },
    { id: 10, category: 'islamic', title: 'Ramadan Program', description: 'Special Ramadan activities', image: 'https://images.unsplash.com/photo-1582653291997-079a1f04e6a1?w=600' },
    { id: 11, category: 'hifz', title: 'Tajweed Class', description: 'Learning proper pronunciation', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600' },
    { id: 12, category: 'activities', title: 'Study Session', description: 'Group study and discussion', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600' }
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