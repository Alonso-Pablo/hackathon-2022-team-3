import { Route, Routes, BrowserRouter } from 'react-router-dom';

import SignIn from '@/components/Login/SignIn';
import SignUp from '@/components/Login/SignUp';
import { ProtectedRoute } from '@/components';

import DashboardPrivateRoute from './privateRouter/DashboardPrivateRoute';
import PrivateRouter from './privateRouter/PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <DashboardPrivateRoute />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
