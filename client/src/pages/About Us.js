import React from 'react';
import Navbar from '../components/NavBar';

const AboutUs = () => {
  return (
    <>
    <Navbar page="ABOUT US" />
    <div style={{
      backgroundColor: '#41B3A3',
      minHeight: '100vh',
      width: '100%',
      position: 'absolute',
      fontFamily: 'Arial',
      paddingLeft: '10%',
      paddingRight: '10%'
    }}>
      <h2>Inspired Craftsmanship, Global Recognition</h2>
      <p>GLEAM CERAMIC COMPLEX, an industry leader in Sri Lanka since 2020, invites you to experience the essence of ceramic craftsmanship. Our global acclaim is a testament to our commitment to redefining industry standards through unparalleled quality and innovation.</p>
      <br></br>
      <h2>Our Story:</h2>
      <p>Founded in 2020, GLEAM CERAMIC COMPLEX has swiftly become a benchmark for ceramic excellence. Our journey is characterized by a dedication to setting new standards and offering innovative solutions.</p>
      <br></br>
      <h2>Design Brilliance:</h2>
      <p>At GLEAM, our tiles embody a harmonious blend of superior materials, advanced technology, and creative brilliance. Our distinctive designs showcase our commitment to pushing the boundaries of excellence in the ceramic realm.</p>
      <br></br>
      <h2>Product Range:</h2>
      <p>Explore our premium wall and floor tiles, each a masterpiece crafted with the highest quality materials and state-of-the-art technology. Available in various colors, sizes, and textures, our tiles redefine spaces with elegance and authenticity.</p>

      <p>Experience the future of ceramics with GLEAM CERAMIC COMPLEX. Elevate your spaces with our exquisite tiles, where craftsmanship meets innovation, and each tile tells a unique story.</p>
      <br></br>
      <h2>Crafting Tomorrow's Spaces Today - GLEAM CERAMIC COMPLEX, Shaping Excellence Since 2020.</h2>
    </div>
    </>
  );
};

export default AboutUs;