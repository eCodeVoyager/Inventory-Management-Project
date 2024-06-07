import React from 'react';
import image from '../images/img9.jpg';
import Table_Ware from '../images/img3.jpg';
import Mugs_and_Cups  from '../images/img4.jpg';
import Decorative_Item  from '../images/img5.jpeg';
import Burners_and_Lamps from '../images/img11.jpg';
import Corporate_Gifts from '../images/img7.jpeg';
import Other from '../images/img8.jpg';
import Navbar from '../components/NavBar';
import { Link } from 'react-router-dom';


const Home = () => {
  const images = [
    { name: 'Table ware', url: Table_Ware, category_id: 1},
    { name: 'Mugs and Cups', url: Mugs_and_Cups, category_id: 2},
    { name: 'Decorative Items', url: Decorative_Item , category_id: 3},
    { name: 'Burners and Lamps', url: Burners_and_Lamps },
    { name: 'Corporate Gifts', url: Corporate_Gifts },
    { name: 'Other', url: Other },
  ];

  return (
    <>
      <Navbar page="GLEAM CERAMIC COMPLEX" />
      <div style={{display: 'flex', backgroundColor: '#41B3A3', alignItems: 'flex-start'}}>
        <div style={{width: '50%', padding: '10px', paddingLeft:'30px',paddingTop:'30PX'}}>
          <img src={image} alt="img9" style={{width: '80%', height: '50%'}} />
        </div>
        <div style={{width: '50%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '10px'}}>
        {images.map((image, index) => (
          <div key={index} style={{width: '30%', padding: '10px',paddingTop:'30PX'}}>
            <Link to={`/subcategory/${image.category_id}`}>
            <img 
              src={image.url} 
              alt={image.name} 
              style={index === 10 ? 
                {height: '50%'} : 
                {width: '100%', height: '60%'}
              }
                />
                <p style={{textAlign: 'center', marginTop: '10px'}}>{image.name}</p>
             </ Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;