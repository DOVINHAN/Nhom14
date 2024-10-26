export default function Home() {
  return (
    <div>
      {/* Main Layout Section */}
      <section className="main-layout">
        <div className="large-box">
          <img src="/img/banner21.jpg" alt="Banner 5" style={{ width: "100%" }} />
        </div>
        <div className="right-small-boxes">
          {["banner22.jpg", "banner23.jpg", "banner24.png"].map((img, index) => (
            <div className="small-box" key={index}>
              <img src={`/img/${img}`} alt={`Banner ${index + 2}`} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Today's Deals Section */}
      <section className="today-deals">
        <h2>Today's Deals</h2>
        <div className="deals-container">
          {[
            { title: "Samsung", reviews: 2, discount: 24, original: 250, sale: 190, img: "dienthoai.jpg" },
            { title: "Laptop", reviews: 2, discount: 10, original: 390, sale: 350, img: "laptop.avif" },
            { title: "Samsung", reviews: 0, discount: 17, original: 300, sale: 250, img: "dienthoai.jpg" },
            { title: "Laptop", reviews: 4, discount: 26, original: 350, sale: 260, img: "laptop.avif" },
            { title: "Samsung", reviews: 0, discount: 13, original: 460, sale: 400, img: "dienthoai.jpg" },
          ].map((deal, index) => (
            <div className="deal-item" key={index}>
              <div className="deal-info">
                <span className="deal-title">{deal.title}</span>
                <div className="deal-reviews">{deal.reviews} Review(s)</div><br/>
                <span className="deal-discount">-{deal.discount}%</span>
                <div className="deal-price">
                  <span className="original-price">${deal.original.toFixed(2)}</span>
                  <span className="sale-price">${deal.sale.toFixed(2)}</span>
                </div>
              </div>
              <div className="deal-image">
                <img src={`/img/${deal.img}`} alt={deal.title} style={{ width: "100%" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Best Sellers Section */}
      <section className="weekly-best-sellers">
        <h2>Weekly Best Sellers</h2>
        <div className="categories">
          {["Blender", "Mixer", "Microwave", "Sponge", "Paper Towel", "Vacuum Cleaner"].map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="deals-container">
          {[
            { title: "Veniam Dolore", reviews: 2, discount: 24, original: 250, sale: 190, img: "product1.jpeg" },
            { title: "Cleaner With Bag", reviews: 2, discount: 10, original: 390, sale: 350, img: "product2.jpeg" },
            { title: "Philips Stand", reviews: 0, discount: 17, original: 300, sale: 250, img: "product3.jpeg" },
            { title: "Vacuum Cleaner", reviews: 4, discount: 26, original: 350, sale: 260, img: "product4.jpeg" },
            { title: "Nisi Ball Tip", reviews: 0, discount: 13, original: 460, sale: 400, img: "product5.jpeg" },
          ].map((product, index) => (
            <div className="deal-item" key={index}>
              <div className="deal-info">
                <span className="deal-title">{product.title}</span>
                <div className="deal-reviews">{product.reviews} Review(s)</div><br/>
                <span className="deal-discount">-{product.discount}%</span>
                <div className="deal-price">
                  <span className="original-price">${product.original.toFixed(2)}</span>
                  <span className="sale-price">${product.sale.toFixed(2)}</span>
                </div>
              </div>
              <div className="deal-image">
                <img src={`/img/${product.img}`} alt={product.title} style={{ width: "100%" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="banner-images">
          {["banner27.jpg", "banner26.jpg"].map((img, index) => (
            <div className="banner" key={index}>
              <img src={`/img/${img}`} alt={`Banner ${index + 6}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Hot Brands Section */}
      <section className="hot-brands-section">
        <div className="brands-header">
          <h2>HOT BRANDS</h2>
        </div>
        <div className="brands-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="brand-box" key={index}>
              <img src="/img/banner7.jpg" alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Our Latest Blogs</h2>
        <div className="blogs-container">
          {["blog.jpg", "blog2.gif", "blog3.jpg"].map((img, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={`/img/${img}`} alt={`Blog ${index + 1}`} />
              </div>
              <div className="blog-info">
                <p className="blog-date">October 18, 2024</p>
                <h3 className="blog-title">Blog Post {index + 1}</h3>
                <div className="blog-meta">
                  <span>0 Comment</span>
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="guarantees">
          <div className="guarantee-item">💸 Money Back Guarantee - 30 Days</div>
          <div className="guarantee-item">🚚 Free Worldwide Shipping - On Orders Over $100</div>
          <div className="guarantee-item">🏷️ Member Discount - Up to 70% Off</div>
          <div className="guarantee-item">🛠️ 24/7 Online Support - Technical Support 24/7</div>
        </div>
      </section>
    </div>
  );
}
