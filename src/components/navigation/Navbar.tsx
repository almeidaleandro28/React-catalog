import PropTypes from 'prop-types';
import logo from '../../assets/img/menu_list.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';

Navbar.propTypes = {
  alt: PropTypes.string
};

Navbar.defaultProp = {
  alt: "menu"
}

function Navbar( { alt } ) {

  const [ showMenuMobile, setShowMenuMobile ] = useState(false);

  return (
    <>
    <nav className='bg-blue-500 text-white'>
      <div className='flex justify-between align-middle p-4'>

        <a className='flex' href="#">
          <h4 className=''>ds catalog</h4>
        </a>

        <div className='md:block hidden'>
          <Menu />
        </div>

        <button className='md:hidden inline-flex items-center' type='button' data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false" 
        onClick={ () => setShowMenuMobile( !showMenuMobile ) }>
          <span className="sr-only">Open main menu</span>
          <img src={logo} alt={alt} aria-hidden="true"/>
        </button>
       
      </div>
      
      <div className='md:hidden'>
        {showMenuMobile && <Menu />}
      </div>

    </nav>
   </>
  );
}

export default Navbar;