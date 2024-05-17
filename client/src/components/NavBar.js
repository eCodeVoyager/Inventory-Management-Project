import { Link, useLocation } from 'react-router-dom';

const Navbar = ( {page}) => {
  const location = useLocation();
  const pathName = location.pathname;

  // Map paths to page names
  const pageNames = {
    '/': 'Home',
    '/about': 'About Us',
    '/collection': 'Our Collection',
    '/contact': 'Contact Us',
    '/login': 'Login',
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', backgroundColor: '#C38D9E' }}>
      <div>
        <h1 className='text-black'>{page}</h1>
      </div>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/home" style={{ color: 'white' }}>Home</Link>
        <Link to="/about-us" style={{ color: 'white' }}>About Us</Link>
        <Link to="/our-collection" style={{ color: 'white' }}>Our Collection</Link>
        <Link to="/contact-us" style={{ color: 'white' }}>Contact Us</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;