import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/img2.jpg';


const Login = () => {
  const [values, setValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.username = values.username ? "" : "Username is required.";
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
            <h1 style={{ color: '#41B3A3' }}>Welcome back !</h1>
            <p style={{ color: 'blue' }}>Login to your account</p>
          </div>
          <form>
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
              {errors.username && <p>{errors.username}</p>}
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
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%' }}>
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
              <button type="submit" onClick={validateForm} className="btn btn-primary" style={{ backgroundColor: '#41B3A3', marginTop: '5%', padding: '8px 20px',borderRadius: '15px', fontSize: '18px', color: 'white' }}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;