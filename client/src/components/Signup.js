import React, { useState } from 'react';
import backgroundImage from '../images/img12.jpg'; 
import { Link } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '', address: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', address: '', phone: '' });

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
    tempErrors.address = values.address ? "" : "Address is required.";
    tempErrors.phone = values.phone ? "" : "Phone number is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        width: '400px',
        padding: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',  
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ color: 'black', fontSize: '36px' }}>Get Started</h1>
          <p style={{ color: 'blue', fontSize: '20px' }}>Create your account</p>
        </div>
        <form>
          <div className="mb-3" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="name"
              placeholder='Enter your full name'
              value={values.name}
              onChange={handleChange}
              className="form-control"
              style={{ 
                borderRadius: '15px', 
                padding: '10px', 
                fontSize: '16px',
                border: '1px solid black'
              }}
            />
            {errors.name && <p style={{ color: 'red', marginTop: '5px' }}>{errors.name}</p>}
          </div>
          
          <div className="mb-3" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="address"
              placeholder='Enter your address'
              value={values.address}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: '15px', 
                padding: '10px', 
                fontSize: '16px',
                border: '1px solid black' 
              }}
            />
            {errors.address && <p style={{ color: 'red', marginTop: '5px' }}>{errors.address}</p>}
          </div>

          <div className="mb-3" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="phone"
              placeholder='Enter your phone number'
              value={values.phone}
              onChange={handleChange}
              className="form-control"
              style={{ 
                borderRadius: '15px', 
                padding: '10px', 
                fontSize: '16px',
                border: '1px solid black' 
              }}
            />
            {errors.phone && <p style={{ color: 'red', marginTop: '5px' }}>{errors.phone}</p>}
          </div>

          <div className="mb-3" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="email"
              placeholder='Enter your email address'
              value={values.email}
              onChange={handleChange}
              className="form-control"
              style={{ 
                borderRadius: '15px', 
                padding: '10px', 
                fontSize: '16px',
                border: '1px solid black'
              }}
            />
            {errors.email && <p style={{ color: 'red', marginTop: '5px' }}>{errors.email}</p>}
          </div>

          <div className="mb-3" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <input
              type="password"
              name="password"
              placeholder='Create a strong password'
              value={values.password}
              onChange={handleChange}
              className="form-control"
              style={{ 
                borderRadius: '15px', 
                padding: '10px', 
                fontSize: '16px',
                border: '1px solid black'
              }}
            />
            {errors.password && <p style={{ color: 'red', marginTop: '5px' }}>{errors.password}</p>}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'blue' }}>Already have an account? <Link to="/login">Login</Link></p>
            <button type="submit" onClick={validateForm} className="btn btn-primary" style={{
              backgroundColor: '#03045e',
              borderRadius: '15px',
              padding: '10px 20px',
              fontSize: '18px',
              color: 'white',
              marginTop: '20px'
            }}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
