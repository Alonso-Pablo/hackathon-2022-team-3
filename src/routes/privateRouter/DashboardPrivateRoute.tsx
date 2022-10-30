import { Navigate, Route, Routes } from 'react-router';
import Layout from '../../components/layout/Layout';
import Home from '../../views/Home';

const DashboardPrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardPrivateRoute;
