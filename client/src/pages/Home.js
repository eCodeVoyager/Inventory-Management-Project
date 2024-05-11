import React from 'react';
import image from '../images/img9.jpg';
import kitchen_Items from '../images/img3.jpg';
import Mugs_and_Cups  from '../images/img4.jpg';
import Decorative_Item  from '../images/img5.jpeg';
import Art_and_Events from '../images/img6.jpg';
import Corporate_Gifts from '../images/img7.jpeg';
import Table_Ware from '../images/img8.jpg';

const Home = () => {
  const images = [
    { name: 'kitchen Items', url: kitchen_Items },
    { name: 'Mugs and Cups', url: Mugs_and_Cups },
    { name: 'Decorative Items', url: Decorative_Item },
    { name: 'Art and Events', url: Art_and_Events },
    { name: 'Corporate Gifts', url: Corporate_Gifts },
    { name: 'Table Ware ', url: Table_Ware },
  ];

  return (
    <div style={{display: 'flex', backgroundColor: '#41B3A3'}}>
      <div style={{width: '50%', padding: '10px'}}>
        <img src={image} alt="img9" style={{width: '100%', height: 'auto'}} />
      </div>
      <div style={{width: '50%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '10px'}}>
        {images.map((image, index) => (
          <div key={index} style={{width: '30%', padding: '10px'}}>
            <img src={image.url} alt={image.name} style={{width: '100%', height: 'auto'}} />
            <p style={{textAlign: 'center', marginTop: '10px'}}>{image.name}</p></div>
        ))}
      </div>
    </div>

  );
};

export default Home;