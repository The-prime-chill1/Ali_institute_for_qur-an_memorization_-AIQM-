import React, { useEffect, useState } from 'react';
import '../css/news.css';

const News = () => {
  useEffect(() => {
    document.title = 'AIQM - News & Events | Ali Institute For Qur\'an Memorization';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Admissions', 'Events', 'Graduation', 'Ramadan Programs', 'School Announcements'];

  const newsItems = [
    {
      id: 1,
      title: 'New Academic Session 2025 Now Open',
      category: 'Admissions',
      date: 'January 15, 2025',
      excerpt: 'Registration for the new academic session is now open. Limited seats available for the upcoming session. Apply now to secure your place.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Annual Graduation Ceremony 2024',
      category: 'Graduation',
      date: 'December 10, 2024',
      excerpt: 'Celebrating the success of our 50 new Huffaz graduates. Join us for this memorable occasion as we honor their achievement.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600',
      featured: false
    },
    {
      id: 3,
      title: 'Ramadan Special Programs Announced',
      category: 'Ramadan Programs',
      date: 'March 1, 2025',
      excerpt: 'Special Taraweeh sessions and Qur\'an completion programs during the blessed month of Ramadan. Open to all students.',
      image: 'https://images.unsplash.com/photo-1584551246679-258d1e3c2865?w=600',
      featured: false
    },
    {
      id: 4,
      title: 'New Boarding Facilities Expansion',
      category: 'School Announcements',
      date: 'November 20, 2024',
      excerpt: 'Expansion of boarding facilities to accommodate more students with modern amenities and improved living conditions.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Qur\'an Competition 2024',
      category: 'Events',
      date: 'October 5, 2024',
      excerpt: 'Annual inter-school Qur\'an memorization competition. Students from various schools will participate.',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9adbc?w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Parent-Teacher Conference',
      category: 'Events',
      date: 'September 20, 2024',
      excerpt: 'Semester parent-teacher meeting to discuss student progress and development.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600',
      featured: false
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.find(item => item.featured);

  return (
    <main className="news-page">
      <div className="page-header">
        <div className="container">
          <h1>News & Events</h1>
          <p>Stay updated with the latest happenings at AIQM</p>
        </div>
      </div>

      {featuredNews && (
        <section className="featured-news section">
          <div className="container">
            <div className="featured-card">
              <div className="featured-image">
                <img src={featuredNews.image} alt={featuredNews.title} />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-content">
                <span className="news-category">{featuredNews.category}</span>
                <h2>{featuredNews.title}</h2>
                <p>{featuredNews.excerpt}</p>
                <div className="news-date">{featuredNews.date}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="news-search section">
        <div className="container">
          <div className="search-filter">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="news-grid-section section">
        <div className="container">
          <div className="news-grid">
            {filteredNews.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="news-content">
                  <span className="news-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <button className="read-more">Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;