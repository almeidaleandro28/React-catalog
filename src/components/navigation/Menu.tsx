import { Link } from 'react-router-dom';


function Menu(props) {
  return (
    <div className='w-full md:w-auto' id='navbar-default'>
      <ul className='font-medium md:flex'>
        <li><Link to="/">home</Link></li>
        <li><Link to="catalog">catalog</Link></li>
        <li><Link to="admin">admin</Link></li>
      </ul> 
    </div>
  );
}

export default Menu;