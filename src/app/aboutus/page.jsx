'use client';
import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Hero Banner Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <img 
          src="/img/sp6.jpg" 
          alt="Big Banner" 
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }} 
        />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>WELCOME TO ETROSTORES</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto' }}>
        Welcome to ETRO STORES, a place that provides the most advanced and quality electronic products. With the mission of bringing the best convenience and technology experience to customers, we specialize in providing electronic devices from leading brands such as phones, laptops, televisions, and smart home appliances. Our staff is always ready to support you with professional knowledge and dedicated service, ensuring to bring you absolute satisfaction in every shopping.
        </p>
      </div>

      {/* Features Section */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '100px', 
          flexWrap: 'wrap' 
        }}
      >
        <div 
          style={{ 
            flex: '1', 
            textAlign: 'center', 
            padding: '0 10px', 
            marginBottom: '30px', 
            minWidth: '250px' 
          }}
        >
          <img 
            src="/img/giaohang.jpg" 
            alt="Delivered with Care" 
            style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', marginBottom: '10px' }} 
          />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>DELIVERED WITH CARE</h3>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            Each product item is carefully checked before appearing on Etrostore.
          </p>
        </div>
        <div 
          style={{ 
            flex: '1', 
            textAlign: 'center', 
            padding: '0 10px', 
            marginBottom: '30px', 
            minWidth: '250px' 
          }}
        >
          <img 
            src="/img/quality.png" 
            alt="Excellent Quality" 
            style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', marginBottom: '10px' }} 
          />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>EXCELLENT QUALITY</h3>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            All these products are under the brand reputation, with clear origins, competitive pricing.
          </p>
        </div>
        <div 
          style={{ 
            flex: '1', 
            textAlign: 'center', 
            padding: '0 10px', 
            marginBottom: '30px', 
            minWidth: '250px' 
          }}
        >
          <img 
            src="/img/faster.jpg" 
            alt="Faster Delivery" 
            style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', marginBottom: '10px' }} 
          />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>FASTER DELIVERY</h3>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            All these products are under the brand reputation, with clear origins, competitive pricing.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>MEET OUR TEAM</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '40px' }}>
          We are working hard with passion day by day to deliver best kitchen items to you.
          Besides work, we love backpacking, baking for fun, and sky-diving, etc.
        </p>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap' 
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '30px', width: '261px' }}>
            <img 
              src="/img/man1.webp" 
              alt="Roy Hamilton" 
              style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>ROY HAMILTON</h4>
            <p style={{ fontSize: '1rem', color: '#555' }}>Care Workers</p>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '30px', width: '261px' }}>
            <img 
              src="/img/man2.jpg" 
              alt="Michal Kors" 
              style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>MICHAL KORS</h4>
            <p style={{ fontSize: '1rem', color: '#555' }}>Administrator, Web Designer</p>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '30px', width: '261px' }}>
            <img 
              src="/img/man3.jpg" 
              alt="John Doe" 
              style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>JOHN DOE</h4>
            <p style={{ fontSize: '1rem', color: '#555' }}>Administrator, Web Designer</p>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '30px', width: '261px' }}>
            <img 
              src="/img/man4.png" 
              alt="Katharin" 
              style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>KATHARIN</h4>
            <p style={{ fontSize: '1rem', color: '#555' }}>Administrator, Web Designer</p>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.2rem;
          }
          p {
            font-size: 1rem;
          }
          .team-section img {
            height: 250px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.9rem;
          }
          .team-section img {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
