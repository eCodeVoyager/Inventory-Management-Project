import React, { useState } from 'react';
import backgroundImage from '../images/img2.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = values.name ? "" : "Name is required.";
    tempErrors.email = values.email ? "" : "Email is required.";
    tempErrors.password = values.password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '50%',
        height: '100vh'
      }}></div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ width: '40%', padding: '5%', borderRadius: '5px' }}>
          <div style={{ textAlign: 'center', marginBottom: '10%' }}>
            <h1 style={{ color: '#41B3A3' }}>Get Started</h1>
            <p style={{ color: 'blue' }}>Create your account</p>
          </div>
          <form>
            <div className="mb-3" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input
                type="text"
                name="name"
                placeholder='Enter your full name'
                value={values.name}
                onChange={handleChange}
                className="form-control"
                style={{ borderRadius: '15px', padding: '8px 20px' }}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            
            <div className="mb-3" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input
                type="text"
                name="email"
                placeholder='Enter your email address'
                value={values.email}
                onChange={handleChange}
                className="form-control"
                style={{ borderRadius: '15px', padding: '8px 20px' }}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="mb-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
    
              <input
                type="password"
                name="password"
                placeholder='Create a strong password'
                value={values.password}
                onChange={handleChange}
                className="form-control"
                style={{ borderRadius: '15px', padding: '8px 20px' }}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%' }}>
              <p>Already have an account? <Link to="/login">Login</Link></p>
              <button type="submit" onClick={validateForm} className="btn btn-primary" style={{ backgroundColor: '#41B3A3', marginTop: '5%',borderRadius: '15px', padding: '8px 20px', fontSize: '18px', color: 'white' }}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;