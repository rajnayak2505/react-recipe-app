import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <img src='/images/logo.png' alt='' />
        </div>
      </Link>
      <ul>
      <Link to='/breakfast'><li>Breakfast</li></Link>
      <Link to='/lunch-dinner'><li>Lunch/Dinner</li></Link>
      <Link to='/snack'><li>Snack</li></Link>
      <Link to='/juices'><li>Juices</li></Link>
      <Link to='/shakes'><li>Shakes</li></Link>
      </ul>
    </div>
  );
};

export default Header;
