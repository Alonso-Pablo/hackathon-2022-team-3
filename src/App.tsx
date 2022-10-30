import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Home from './views/Home';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppRouter from './routes/AppRouter';

function App() {
  return <AppRouter />;
}

export default App;
