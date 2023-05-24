import React from 'react';
import PropTypes from 'prop-types';
import Button from '../input/Button';
import mainImg from '../../assets/img/main-image.svg';
import { Arrow } from '../Arrow';


Hero.propTypes = {
  alt: PropTypes.string,
};

Hero.defaultProps = {
  alt: "woman sitting at office desk using laptop"
}

function Hero( { alt } ) {
  return (
    <section className='bg-gray-300 h-screen flex justify-center p-5'>
      <div className='bg-white rounded-3xl w-screen flex flex-col justify-around'>
        
        <div className='w-96 h-64 mx-auto'>
          <img src={mainImg} alt={alt} />
        </div>

        <div className='w-96 h-20 mx-auto'>
          <h1 className='font-bold leading-9 text-center tracking-wide text-2xl'>know the best
          product catalog
          </h1>
        </div>

        <div className='w-96 h-20 mx-auto'>
          <p className='font-normal leading-6 tracking-wide text-base'>
            We will help you find 
            the best products available
            on the market.
          </p>
        </div>
        
        <div className='w-96 h-12 flex justify-center mx-auto relative'>
          <Button text={"start your search now"} />
          <div className='w-1/5 h-full rounded-lg bg-blue-900 absolute right-0 flex justify-center '>
            <Arrow/>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;