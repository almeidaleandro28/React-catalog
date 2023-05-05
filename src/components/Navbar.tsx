import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/img/menu_list.svg'

Navbar.propTypes = {
  alt: PropTypes.string
};

Navbar.defaultProp = {
  alt: "menu"
}

function Navbar( { alt } ) {
  return (
    <nav className='bg-blue-500 text-white'>
      <div className='flex justify-between align-middle p-4'>

        <a className='flex' href="#">
          <h4 className=''>ds catalog</h4>
        </a>

        <button className='md:hidden' type='button'>
          <span className="sr-only">Open main menu</span>
          <img src={logo} alt={alt} />
        </button>
       
       <div className='hidden w-full md:block '>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="">catalog</a></li>
            <li><a href="">admin</a></li>
          </ul>
       </div>

      </div>
    </nav>
  );
}

export default Navbar;