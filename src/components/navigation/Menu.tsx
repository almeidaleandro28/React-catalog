import { Link } from 'react-router-dom';


function Menu(props) {
  return (
    <div className='w-full md:w-auto' id='navbar-default'>
      <ul className='font-medium md:flex'>
        <li className='py-2 pl-3 pr-4  rounded md:border-0 text-white 
          hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
          aria-current="page"'><Link to="/">home</Link></li>
        <li className='py-2 pl-3 pr-4 rounded md:border-0 text-gray-900
          hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'>
          <Link to="/catalog">catalog</Link></li>
        <li className='py-2 pl-3 pr-4 rounded md:border-0 text-gray-900 
          hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'>
          <Link to="/admin">admin</Link></li>
      </ul> 
    </div>
  );
}

export default Menu;