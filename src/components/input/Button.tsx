import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  text: "msg",
  type: "button"
}

function Button({ text, type}) {
  return (
    <input className='w-full text-white bg-blue-500 uppercase font-medium rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 py-px' type={type} value={text} />
  );
}

export default Button;