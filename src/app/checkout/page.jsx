"use client"
import React, { useState } from 'react';
import '../globals.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('check');

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-form">
        <div className="billing-details">
          <h3>Billing Details</h3>
          <form>
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="form-group">
              <label>Country *</label>
              <select>
                <option value="Vietnam">Vietnam</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="form-group">
              <label>Address *</label>
              <input type="text" placeholder="Street Address" required />
            </div>
            <div className="form-group">
              <label>Postcode / ZIP *</label>
              <input type="text" placeholder="Postcode / ZIP" required />
            </div>
            <div className="form-group">
              <label>Town / City *</label>
              <input type="text" placeholder="Town / City" required />
            </div>
            <div className="form-group">
              <input type="checkbox" id="createAccount" />
              <label htmlFor="createAccount">Create an account?</label>
            </div>
          </form>
        </div>

        <div className="additional-information">
          <h3>Additional Information</h3>
          <div className="form-group">
            <label>Order Notes</label>
            <textarea placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
          </div>
        </div>
      </div>

      <div className="order-summary">
        <h3>Your Order</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sint drumstick × 1</td>
              <td>$55.00</td>
            </tr>
            <tr>
              <td>Pisan maze ikan kaze × 1</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>$60.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$60.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="payment-methods">
        <h3>Check Payments</h3>
        <div className="form-group">
          <input
            type="radio"
            name="payment"
            value="check"
            checked={paymentMethod === 'check'}
            onChange={() => setPaymentMethod('check')}
          />
          <label>Check Payments</label>
          <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
        </div>
        <div className="form-group">
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={() => setPaymentMethod('cod')}
          />
          <label>Cash on Delivery</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            name="payment"
            value="paypal"
            onChange={() => setPaymentMethod('paypal')}
          />
          <label>PayPal</label>
        </div>
      </div>

      <button className="place-order-button">Place Order</button>
    </div>
  );
};

export default Checkout;
