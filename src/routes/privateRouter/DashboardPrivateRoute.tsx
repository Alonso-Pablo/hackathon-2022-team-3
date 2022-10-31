import { Home } from '@/view/Home';
import { Categories } from '@/view/Home/Categories';
import { Results } from '@/view/Home/Search/Results';
import { Navigate, Route, Routes } from 'react-router';
import Layout from '../../components/layout/Layout';

const DashboardPrivateRoute = () => {
  return (
    <>
      {' '}
      <h2 className="subtitle">
        Ofertas de Empleo disponibles en AgarraLaPala
      </h2>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/resultado" element={<Results />} />

        <Route element={<Layout />}>
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardPrivateRoute;
