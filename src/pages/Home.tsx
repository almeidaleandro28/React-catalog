import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Hero from '../components/layout/Hero';

Home.propTypes = {
  
};

function Home(props) {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default Home;