import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import Sort from './Sort'

const Navbar = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <a href='/cupcakes'><Link to="/cupcakes">Sugar Lipss</Link> </a>
        </div>
        <Search />
        <Sort />
        <nav>
          <ul>
            <li ><Link className="text-c" to="/">Main page</Link></li>
            <li ><Link className="text-c" to="/signup">Sign up</Link></li>
            <li ><Link className="text-c" to="/profile">Account</Link></li>
            {/* <li><Link to="/">?</Link></li> */}
            {/* <li><Link to="/">?</Link></li> */}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;
