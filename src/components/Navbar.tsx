import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/img/menu_list.svg'
import { Link } from 'react-router-dom';

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

        <button className='md:hidden' type='button' data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <img src={logo} alt={alt} aria-hidden="true"/>
        </button>
       
       <div className='hidden w-full md:block' id='navbar-default'>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="catalog">catalog</Link></li>
            <li><Link to="admin">admin</Link></li>
          </ul>
       </div>

      </div>
    </nav>
  );
}

export default Navbar;