import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logo from '../image/booklogo.webp';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isFormValid = email !== '' && password !== '';

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const response = await axios.post('http://localhost:8080/api/customers/login', {
          email,
          password,
        });

        if (response.data) {
          window.location.href = '/dashboard';
        } else {
          setErrorMessage("You don't have an account, please signup.");
        }
      } catch (error) {
        setErrorMessage("Login failed, please try again.");
      }
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="forgot-password">
            <a href="/signup">Forgot password?</a>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button 
            type="submit" 
            className="login-button" 
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
        <div className="signup">
          <p>Don't have an account? <a href="/signup">Signup now</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
