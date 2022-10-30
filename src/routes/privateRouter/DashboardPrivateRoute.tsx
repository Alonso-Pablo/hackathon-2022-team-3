import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/components';

const DashboardPrivateRoute = () => {
  const Home = lazy(() => import('@/views/Home'));
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default DashboardPrivateRoute;
