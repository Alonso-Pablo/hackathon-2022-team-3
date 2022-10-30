<<<<<<< HEAD
import { Home } from "./view/Home"

function App() {
    return (
        <>
            <div>
                <h1 className="bg-black text-white">Hola mundo</h1>

            </div>
            <Home />

        </>
    )
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Home from './views/Home';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppRouter from './routes/AppRouter';

function App() {
  return <AppRouter />;
>>>>>>> 78772f68ea1b34cf6efa3b470840c3d51870df50
}

export default App;
