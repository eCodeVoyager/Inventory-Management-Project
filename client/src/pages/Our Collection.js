import React from 'react';
import { Link } from 'react-router-dom';
import Table_Ware from '../images/img16.jpg';
import Mugs_and_Cups from '../images/img18.jpg';
import Decorative_Item from '../images/img17.jpg';
import Burners_and_Lamps from '../images/img11.jpg';
import Corporate_Gifts from '../images/img7.jpeg';
import Other from '../images/img8.jpg';

import Navbar from '../components/NavBar';

const OurCollection = () => {
  const images = [
    { name: 'Table ware', url: Table_Ware, category_id: 1 },
    { name: 'Mugs and Cups', url: Mugs_and_Cups, category_id: 2 },
    { name: 'Decorative Items', url: Decorative_Item, category_id: 3 },
    { name: 'Burners and Lamps', url: Burners_and_Lamps, category_id: 4 },
    { name: 'Corporate Gifts', url: Corporate_Gifts, category_id: 5 },
    { name: 'Other', url: Other, category_id: 6 },
  ];

  return (
    <>
      <Navbar page="OUR COLLECTION" />
      <div style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#E6F0DC' 
      }}>
        {images.map((image, index) => (
          <div key={index} style={{
            width: '30%',
            padding: '10px',
            paddingTop: '10px',
            boxSizing: 'border-box'
          }}>
            <Link to={`/subcategory/${image.category_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={image.url} 
                alt={image.name} 
                style={{
                  width: '100%',
                  height: '80%'
                }}
              />
              <p style={{
                textAlign: 'center',
                marginTop: '10px',
                fontWeight: 'bold'
              }}>{image.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurCollection;
