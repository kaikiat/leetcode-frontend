import { Link, useLocation } from "react-router-dom";
const activeLink = 'text-md text-rust'
const inactiveLink = 'text-md'

function Header() {
  const location = useLocation();
  return (
    <div className='w-100 flex items-center justify-between mt-10bg-white' aria-label='navigation'>
        <a href='/' className='m-1.5 p-1.5'>
          <span className='text-2xl font-bold text-rust cursor-pointer ml-3'> &lt;3 Rust </span>
        </a>
      <div className='flex items-center mr-5'>
      <Link to='/new' className = {location.pathname === '/new' ? activeLink: inactiveLink} style = {{'margin': '0 15px'}}>
        New ➕
      </Link>
      </div>
    </div>
  );
}

export default Header;