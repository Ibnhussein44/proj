import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerInf.css';

const CustomerInf = () => {
  const [customers, setCustomers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editingPayment, setEditingPayment] = useState(null);
  const [customerForm, setCustomerForm] = useState({ name: '', email: '', password: '' });
  const [paymentForm, setPaymentForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    cardOrMobile: '',
    cardNumber: ''
  });

  useEffect(() => {
    fetchCustomers();
    fetchPayments();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.log('Data not found', error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/payments');
      setPayments(response.data);
    } catch (error) {
      console.log('Data not found', error);
    }
  };

  const handleCustomerDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/customers/${id}`);
      fetchCustomers();
    } catch (error) {
      console.log('Delete failed', error);
    }
  };

  const handlePaymentDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/payments/${id}`);
      fetchPayments();
    } catch (error) {
      console.log('Delete failed', error);
    }
  };

  const handleCustomerEdit = (customer) => {
    setEditingCustomer(customer.id);
    setCustomerForm({ name: customer.name, email: customer.email, password: customer.password });
  };

  const handlePaymentEdit = (payment) => {
    setEditingPayment(payment.id);
    setPaymentForm({
      fullName: payment.fullName,
      email: payment.email,
      address: payment.address,
      city: payment.city,
      cardOrMobile: payment.cardOrMobile,
      cardNumber: payment.cardNumber
    });
  };

  const handleCustomerSave = async () => {
    try {
      if (editingCustomer) {
        await axios.put(`http://localhost:8080/api/customers/${editingCustomer}`, customerForm);
        setEditingCustomer(null);
      } else {
        await axios.post('http://localhost:8080/api/customers', customerForm);
      }
      setCustomerForm({ name: '', email: '', password: '' });
      fetchCustomers();
    } catch (error) {
      console.log('Save failed', error);
    }
  };

  const handlePaymentSave = async () => {
    try {
      if (editingPayment) {
        await axios.put(`http://localhost:8080/api/payments/${editingPayment}`, paymentForm);
        setEditingPayment(null);
      } else {
        await axios.post('http://localhost:8080/api/payments', paymentForm);
      }
      setPaymentForm({
        fullName: '',
        email: '',
        address: '',
        city: '',
        cardOrMobile: '',
        cardNumber: ''
      });
      fetchPayments();
    } catch (error) {
      console.log('Save failed', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{editingCustomer ? 'Edit Customer' : 'Add Customer'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={customerForm.name}
          onChange={(e) => setCustomerForm({ ...customerForm, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={customerForm.email}
          onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={customerForm.password}
          onChange={(e) => setCustomerForm({ ...customerForm, password: e.target.value })}
        />
        <button onClick={handleCustomerSave}>
          {editingCustomer ? 'Save Changes' : 'Customers'}
        </button>
      </div>

      <div className="table-container">
        <h2>Admin Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
                <td>
                  <button onClick={() => handleCustomerEdit(customer)}>Update</button>
                  <button onClick={() => handleCustomerDelete(customer.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-container">
        <h2>{editingPayment ? 'Update Payment' : 'Payments'}</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={paymentForm.fullName}
          onChange={(e) => setPaymentForm({ ...paymentForm, fullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={paymentForm.email}
          onChange={(e) => setPaymentForm({ ...paymentForm, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={paymentForm.address}
          onChange={(e) => setPaymentForm({ ...paymentForm, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={paymentForm.city}
          onChange={(e) => setPaymentForm({ ...paymentForm, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="Card or Mobile"
          value={paymentForm.cardOrMobile}
          onChange={(e) => setPaymentForm({ ...paymentForm, cardOrMobile: e.target.value })}
        />
        <input
          type="text"
          placeholder="Card Number"
          value={paymentForm.cardNumber}
          onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
        />
        <button onClick={handlePaymentSave}>
          {editingPayment ? 'Save Changes' : 'Add Payment'}
        </button>
      </div>

      <div className="table-container">
        {/* <h2>Admin Table - Payments</h2> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Card or Mobile</th>
              <th>Card Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.fullName}</td>
                <td>{payment.email}</td>
                <td>{payment.address}</td>
                <td>{payment.city}</td>
                <td>{payment.cardOrMobile}</td>
                <td>{payment.cardNumber}</td>
                <td>
                  <button onClick={() => handlePaymentEdit(payment)}>Update</button>
                  <button onClick={() => handlePaymentDelete(payment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerInf;
