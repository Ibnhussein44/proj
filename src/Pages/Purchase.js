import React, { useContext, useEffect, useState } from 'react';
import './Purchase.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { CartContext } from '../Pages/CartContext'; // Adjust the path as needed
import axios from 'axios';

const Purchase = () => {
  const { cartItems, updateQuantity } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    cardOrMobile: '',
    cardNumber: ''
  });

  useEffect(() => {
    updateCartTotal();
  }, [cartItems]);

  const updateCartTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.price.replace('$ ', '')) * item.quantity);
    }, 0);
    setTotal(Math.round(total * 100) / 100);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/payments', paymentDetails);
      console.log('Payment saved:', response.data);
      // Optionally, you can redirect to a success page or handle confirmation here
    } catch (error) {
      console.error('Error saving payment:', error);
    }
  };

  return (
    <div>
      <h2>PAYMENT CHECKOUT</h2>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Payment Details</h3>
                  <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="fullName" value={paymentDetails.fullName} onChange={handleChange} required />
                  <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" value={paymentDetails.email} onChange={handleChange} required />
                  <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="address" value={paymentDetails.address} onChange={handleChange} required />
                  <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" value={paymentDetails.city} onChange={handleChange} required />
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="cardOrMobile">Card or Mobile Number</label>
                  <input type="text" id="cardOrMobile" name="cardOrMobile" value={paymentDetails.cardOrMobile} onChange={handleChange} required />
                  <label htmlFor="cardNumber">Credit card number</label>
                  <input type="text" id="cardNumber" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-25">
        <Link to="/Dashboard" className="btn">Return to Dashboard</Link>
      </div>
    </div>
  );
};

export default Purchase;
