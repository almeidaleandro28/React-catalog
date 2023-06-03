import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navigation/Navbar';


Admin.propTypes = {
  
};

function Admin(props) {
  return (
    <div>
      <Navbar />
      <h1>Admin</h1>
    </div>
  );
}

export default Admin;