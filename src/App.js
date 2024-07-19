import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Pages/CartContext'; 
import Dashboard from './Pages/Dashboard';
import AboutUs from './Pages/AboutUs';
import Purchase from './Pages/Purchase';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import SignUpForm from './Pages/Signup';
import Home from './Pages/Home';
import CustomerInf from './Pages/CustomerInf';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/CustInf" element={<CustomerInf />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
