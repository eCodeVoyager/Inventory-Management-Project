import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/img12.jpg';

const Login = () => {
  const [values, setValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = (event) => {
    event.preventDefault();
    let tempErrors = {};
    tempErrors.username = values.username ? "" : "Username is required.";
    tempErrors.password = values.password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100vw', 
      height: '100vh', 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      <div style={{ 
        width: '40%', 
        padding: '5%', 
        borderRadius: '5px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)'  // Transparent background color
      }}>
        <div style={{ textAlign: 'center', marginBottom: '10%' }}>
          <h1 style={{ color: '#41B3A3' }}>Welcome back!</h1>
          <p style={{ color: 'blue' }}>Login to your account</p>
        </div>
        <form onSubmit={validateForm}>
          <div className="mb-3" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="text"
              name="username"
              placeholder='Enter your email address'
              value={values.username}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: '15px', padding: '8px 20px' }}
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
          </div>
          <div className="mb-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: '15px', padding: '8px 20px' }}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%' }}>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#41B3A3', marginTop: '5%', padding: '8px 20px', borderRadius: '15px', fontSize: '18px', color: 'white' }}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;