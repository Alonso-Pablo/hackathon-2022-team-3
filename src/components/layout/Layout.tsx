import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className="border-y-2">
        <ul>
          <li>
            <Link to="/" className="m-3 bg-teal-200">
              Protected Page
            </Link>
          </li>
          <li>
            <Link to="/profile" className="m-3 bg-teal-200">
              Profile Page
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
