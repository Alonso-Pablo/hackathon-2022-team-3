import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from '../components/Login/SignIn';
import SignUp from '../components/Login/SignUp';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthContextProvider } from '../context/AuthContext';
import DashboardPrivateRoute from './privateRouter/DashboardPrivateRoute';
import PrivateRouter from './privateRouter/PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
