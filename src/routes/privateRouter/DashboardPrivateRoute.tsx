import { lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { Header } from '@/components';
import { Home } from '@/views';

const DashboardPrivateRoute = () => {
  /* const Home = lazy(() =>
    import('@/views').then((module) => ({ default: module.Home }))
  ); */
  return (
    <>
      <Header>
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
      </Header>

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};

export default DashboardPrivateRoute;
