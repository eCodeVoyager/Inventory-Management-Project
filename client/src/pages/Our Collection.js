import React from 'react';
import { useNavigate } from 'react-router-dom';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpg';
import Navbar from '../components/NavBar';

const OurCollection = () => {
  const navigate = useNavigate(); 

  const images = [
    { src: img3, name: 'kitchen Items', route: '/page1' },
    { src: img4, name: 'Mugs and Cups', route: '/page2' },
    { src: img5, name: 'Decorative Items', route: '/page3' },
    { src: img6, name: 'Art and Events', route: '/page4' },
    { src: img7, name: 'Corporate Gifts', route: '/page5' },
    { src: img8, name: 'Table Ware', route: '/page6' },
  ];

  return (
    <>
      <Navbar page="OUR COLLECTION" />
      <div style={{ backgroundColor: '#41B3A3', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
        {images.map((image, index) => (
          <div key={index} onClick={() => navigate(image.route)} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
            <img src={image.src} alt={image.name} style={{ width: '100%', height: 'auto' }} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurCollection;