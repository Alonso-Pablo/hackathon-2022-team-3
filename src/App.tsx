import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Home from './views/Home';
import { config } from './services/firebase';
import AuthRoute from './routes/AuthRoute';

initializeApp(config.firbaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
