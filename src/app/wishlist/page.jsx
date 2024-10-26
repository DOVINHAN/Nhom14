
import '../globals.css'; // CSS file import

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <h1>WISHLIST</h1>
      <h2>MY WISHLIST ON MARKET STORE</h2>
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="remove">✖</span> Pisan maze ikan kazen
            </td>
            <td>
              <span className="original-price">$5.50</span> $5.00
            </td>
            <td className="stock-status">In Stock</td>
            <td>
              <button className="add-to-cart">Add To Cart</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="share-section">
        <span>Share on:</span>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-pinterest"></i></a>
          <a href="#"><i className="fa fa-google-plus"></i></a>
          <a href="#"><i className="fa fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;