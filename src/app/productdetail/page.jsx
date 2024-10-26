// ProductDetail.jsx
"use client";
import React, { useState } from 'react';
import '../globals.css';

const relatedProducts = [
  { name: 'Máy ảnh SONY', price: '$100.00', image: '/img/product6.jpeg', rating: 5 },
  { name: 'Tai nghe xì tin', price: '$80.00', image: '/img/product8.jpeg', rating: 4 },
  { name: 'Laptop DELL', price: '$700.00', image: '/img/product9.jpeg', rating: 3 },
  { name: 'Laptop Lenovo', price: '$800.00', image: '/img/product10.jpeg', rating: 5 },
];

const testimonials = [
  { text: 'Sản phẩm này khá tuyệt dời, tôi thích nó!', name: 'Phú', role: 'Web Developer' },
  { text: 'Tôi xài hãng này khá lâu rồi, ổn nha.', name: 'Quốc', role: 'Designer' },
  { text: 'Sản phẩm tuyệt vời', name: 'Minh', role: 'Designer' },
  { text: 'Bảo quản kỹ thì vẫn xài tốt và lâu dài nha', name: 'Ân', role: 'Designer' },
  
];

const ProductDetail = () => {
  const [tab, setTab] = useState('description');

  return (
    <div className="product-detail-container">
      {/* Product Information */}
      <div className="product-info">
        <div className="product-image">
          <img src="/img/product1.jpeg" alt="Product" />
          <div className="thumbnail-gallery">
            <img src="/img/product2.jpeg" alt="Thumbnail 1" />
            <img src="/img/product3.jpeg" alt="Thumbnail 2" />
            <img src="/img/product4.jpeg" alt="Thumbnail 3" />
          </div>
        </div>

        <div className="product-summary">
          <h1>Samsung Galaxy</h1>
          <p className="price">$200.00</p>
          <p>
          Samsung là một trong những thương hiệu điện thoại hàng đầu thế giới, nổi tiếng với thiết kế hiện đại, hiệu năng mạnh mẽ và công nghệ tiên tiến. Các dòng điện thoại Samsung, đặc biệt là Galaxy, được trang bị màn hình AMOLED sống động, camera chất lượng cao và các tính năng như chống nước, sạc nhanh và bảo mật vân tay hoặc khuôn mặt. Hệ điều hành Android tùy biến của Samsung mang lại trải nghiệm người dùng mượt mà, cùng với các tiện ích độc quyền như Samsung Knox bảo mật dữ liệu, và bút S Pen trên dòng Galaxy Note hỗ trợ công việc và sáng tạo.ung 
          </p>
          <button className="add-to-cart">Add to Cart</button>
          <div className="share-buttons">
            <span>Share:</span>
            <button>FB</button>
            <button>TW</button>
            <button>IG</button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={`tab-button ${tab === 'description' ? 'active' : ''}`}
          onClick={() => setTab('description')}
        >
          Description
        </button>
        <button
          className={`tab-button ${tab === 'reviews' ? 'active' : ''}`}
          onClick={() => setTab('reviews')}
        >
          Reviews (0)
        </button>
      </div>

      <div className="tab-content">
        {tab === 'description' ? (
          <p>
Điện thoại Samsung đời cũ          </p>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="product-carousel">
          {relatedProducts.map((product, index) => (
            <div key={index} className="related-product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>
              <span className="quote-left">“</span>
              {testimonial.text}
              <span className="quote-right">”</span>
            </p>
            <p className="author">
              <strong>{testimonial.name}</strong> | {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
