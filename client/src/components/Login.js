import React, { useState } from 'react';
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
          <div style={{ textAlign: 'center', marginBottom: '4%' }}>
            <h1>GLEAM CERAMIC COMPLEX</h1>
          </div>
          <h2>Sign-In</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username"><strong>Username</strong></label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                className="form-control"
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password"><strong>Password</strong></label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="form-control"
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit" onClick={validateForm} className="btn btn-primary">Login</button>
            <p>Don't have an account?</p>
            <button type="button" className="btn btn-secondary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;