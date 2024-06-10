import React from 'react';
import Navbar from '../components/NavBar';
import img1 from '../images/img_1.jpg';

const ContactUs = () => {
  return (
    <><Navbar page="CONTACT US" />
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10%', backgroundColor: '#E6F0DC' }}>
      <div>
        <h1 style={{ fontSize: '32px' }}>GLEAM CERAMIC COMPLEX</h1>
        <p style={{ fontSize: '16px' }}>
          No 02, Centre Road, <br />
          Main Street, <br />
          Badulla, <br />
          Sri Lanka
        </p>
        <br />
        <p style={{ fontSize: '16px' }}>
          Tel : +94 710 420 954 <br />
          Email : dpjayasundara04@gmail.com
        </p>
      </div>
      <img src={img1} alt="Contact Us" style={{ width: '20%', height: '60%' }} />
    </div>
    </>
  );
};

export default ContactUs;