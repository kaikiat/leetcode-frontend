import { Link, useLocation } from "react-router-dom";

const activeLink = 'text-md text-rust'
const inactiveLink = 'text-md'

function Header() {
  const location = useLocation();
  return (
    <div className='w-100 flex items-center justify-between py-10 bg-white' aria-label='navigation'>
        <a href='/' className='-m-1.5 p-1.5'>
          <span className='text-2xl font-bold text-rust cursor-pointer'>Search (⌘ K)</span>
        </a>
      <div className='flex items-center'>
      <Link to='/leetcode' className = {location.pathname === '/leetcode' ? activeLink: inactiveLink} style = {{'margin': '0 15px'}}>
        Leetcode
      </Link>
      <Link to='/dapp' className = {location.pathname === '/dapp' ? activeLink: inactiveLink} style = {{'margin': '0 15px'}}>
        DApp World
      </Link>
      <Link to='/new' className = {location.pathname === '/new' ? activeLink: inactiveLink} style = {{'margin': '0 15px'}}>
        New
      </Link>
      </div>
    </div>
  );
}

export default Header;