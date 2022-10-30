import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Home from './views/Home';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
