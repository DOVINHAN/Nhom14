import React from 'react';
import '../globals.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="post-header">
        <p className="date">October 21, 2024</p>
        <p className="comments">0 Comment</p>
        <p className="category">Post Format</p>
      </div>

      <div className="post-image">
        <img src="/img/sp1.jpg" alt="Post" />
      </div>

      <div className="post-content">
        <p>
        Tôi có một chiếc máy tính và tôi rất vui vì đồng hành cũng nó mỗi ngày trong giờ làm việc
        </p>
        <p>
          <a href="/">Read More</a>
        </p>
      </div>

      <div className="related-news">
        <h3>Related News</h3>
        <div className="related-posts">
          {['Post Format Video', 'Post Format Status', 'Post Format Quote', 'Post Format Link'].map((post, index) => (
            <div className="related-post" key={index}>
              <p>{post}</p>
              <p>December 22, 2016</p>
              <a href="/">Read More</a>
            </div>
          ))}
        </div>
      </div>

      <div className="comments-section">
        <h3>Submit Comment</h3>
        <textarea placeholder="Your Comment"></textarea>
        <button>Post Comment</button>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <p className="quote">"Tôi cũng vậy."</p>
          <p className="author">Mr.Teen, Web Designer</p>
        </div>
        <div className="testimonial">
          <p className="quote">"Tôi thích nó"</p>
          <p className="author">Jack, Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
