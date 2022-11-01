import { Route, Routes, BrowserRouter } from 'react-router-dom';

import SignIn from '@/components/Login/SignIn';
import SignUp from '@/components/Login/SignUp';

import DashboardPrivateRoute from './privateRouter/DashboardPrivateRoute';
import PrivateRouter from './privateRouter/PrivateRouter';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/* if (
  )
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
} */

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="*"
            element={
              <PrivateRouter>
                <DashboardPrivateRoute />
              </PrivateRouter>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
