import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const OurCollection = () => {
  const navigate = useNavigate(); 

  const images = [
    { src: '../images/img3.jpg', name: 'kitchen Items', route: '/page1' },
    { src: '../images/img4.jpg', name: 'Mugs and Cups', route: '/page2' },
    { src: '../images/img5.jpeg', name: 'Decorative Items', route: '/page3' },
    { src: '../images/img6.jpg', name: 'Art and Events', route: '/page4' },
    { src: '../images/img7.jpeg', name: 'Corporate Gifts', route: '/page5' },
    { src: '../images/img8.jpg', name: 'Table Ware', route: '/page6' },
  ];

  return (
    <div style={{ backgroundColor: '#41B3A3' }}>
      {images.map((image, index) => (
        <div key={index} onClick={() => navigate(image.route)}>
          <img src={image.src} alt={image.name} style={{ width: '100%', height: 'auto' }} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OurCollection;