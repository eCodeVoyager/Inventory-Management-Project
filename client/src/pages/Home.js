import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import homeBackground from '../images/home1.jpg';

const Home = () => {
  return (
    <>
      <Navbar page="GLEAM CERAMIC COMPLEX" />
      <div
        style={{
          display: 'flex',
          // justifyContent: 'flex-end',
          alignItems: 'flex-start',
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          padding: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '20px',
            margin: '20px',
            borderRadius: '10px',
            width: '40%',
            textAlign: 'left',
          }}
        >
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: 'blue'}}>WELCOME TO GLEAM CERAMIC COMPLEX</h1>
          <p style={{ marginTop: '20px'}}>
            Gleam Ceramic Complex, your premier destination for exquisite ceramic products. 
            Our website offers a wide range of handcrafted ceramics, perfect for adding a 
            touch of elegance to any space. Whether you are looking for unique home décor pieces, 
            beautiful tableware, or functional kitchen items, our collections showcase the artistry 
            and quality that set us apart. Each piece is meticulously crafted by skilled artisans, 
            ensuring that you receive products that are both beautiful and durable.
          </p>
          <p style={{ marginTop: '20px' }}>
            Explore our diverse collections and find the perfect ceramics to complement your style. 
            From modern minimalist designs to traditional and intricate patterns, we cater to a variety 
            of tastes and preferences. Our commitment to excellence extends beyond our products; we strive 
            to provide an exceptional shopping experience with easy navigation, detailed product descriptions,
            and responsive customer service. Thank you for visiting Gleam Ceramic Complex, where beauty and 
            craftsmanship meet to create timeless ceramics for your home.
          </p>
          <p style={{ marginTop: '20px' }}>
            So why wait? Visit our showroom today and discover the perfect
            ceramic products for your project. We look forward to serving you!
          </p>
          <Link to="/ourcollection" >
          <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#006769', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
              Shop Now
            </button>
          </Link>
        </div>  
      </div>
    </>
  );
};

export default Home;
