import React from 'react';
import Navbar from '../components/NavBar';

const ContactUs = () => {
  return (
    <><Navbar page="Contact us" />
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10%', backgroundColor: '#41B3A3' }}>
      <div>
        <h1 style={{ fontSize: '2em' }}>GLEAM CERAMIC COMPLEX</h1>
        <p style={{ fontSize: '1em' }}>
          No 02, Centre Road, <br />
          Main Street, <br />
          Badulla, <br />
          Sri Lanka
        </p>
        <br />
        <p style={{ fontSize: '1em' }}>
          Tel : +94 710 420 954 <br />
          Email : dpjayasundara04@gmail.com
        </p>
      </div>
      <img src="../images/img_1.jpg" alt="Contact Us" style={{ width: '30%', height: 'auto' }} />
    </div>
    </>
  );
};

export default ContactUs;