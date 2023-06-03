import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/surface/Card';
import Search from '../components/input/Search';
import Navbar from '../components/navigation/Navbar';


Catalog.propTypes = {
  
};

function Catalog(props) {
  return (
    <div>
      <Navbar />
      <Search />
      <h1>Catalog</h1>
      <Card />
    </div>
  );
}

export default Catalog;