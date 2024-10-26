import React from 'react';


const Cart = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav>
        <div className="logo">CART</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <span className="dot"></span>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>

      {/* Cart Table */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="delete-btn">X</button></td>
            <td><img src="/img/sp1.jpg" alt="" width="30px" /></td>
            <td>Laptop </td>
            <td>$300.00</td>
            <td>
              <button>-</button>
              <input type="number" value="1" />
              <button>+</button>
            </td>
            <td>$300.00</td>
          </tr>
        </tbody>
      </table>

      {/* Coupon Section */}
      <div className="coupon">
        <input type="text" placeholder="Coupon code" />
        <button>APPLY COUPON</button>
        <button>UPDATE CART</button>
      </div>

      {/* Cart Totals Section */}
      <div className="cart-totals">
        <h2>CART TOTALS</h2>
        <ul>
          <li>Subtotal: <span>$300.00</span></li>
          <li>Total: <span className="total-amount">$300.00</span></li>
        </ul>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>

      {/* Product Slider Section */}
      <section className="product-slider">
        <h2>Related Products</h2>
        <div className="slider-container">
          <div className="slider-track">
            {[
              { img: "/img/sp2.jpg", name: "Laptop Dell Latitude E5440", price: "$300.00" },
              { img: "/img/sp3.jpg", name: "Laptop Dell Latitude E5550", price: "$400.00" },
              { img: "/img/sp4.jpg", name: "Laptop Lenovo Thinkpad X1 Carbon Gen 5", price: "$600.00" },
              { img: "/img/sp5.jpg", name: "Chuột máy tính Leno", price: "$100.00" },
              { img: "/img/sp6.jpg", name: "Chuột bàn phím Dell Latitude E5440", price: "$300.00" },
              { img: "/img/sp7.jpg", name: "Laptop Dell Latitude E5550", price: "$800.00" },
              { img: "/img/sp8.jpg", name: "Chuột bàn phím Lenovo Thinkpad X1 Carbon Gen 5", price: "$700.00" },
              { img: "/img/sp9.jpg", name: "Chuột Lenovo", price: "$500.00" },
              { img: "/img/sp10.jpg", name: "Bàn Phím Laptop Lenovo Thinkpad W550s", price: "$333.00" },
              { img: "/img/sp11.jpg", name: "Tai nghe ASUS", price: "$111" },
            ].map((product, index) => (
              <div className="slide" key={index}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="slider-nav">
          <button className="prev">&#10094;</button>
          <button className="next">&#10095;</button>
        </div>
      </section>
    </div>
  );
}
export default Cart;
