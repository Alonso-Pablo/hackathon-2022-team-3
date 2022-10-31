export interface HomeInterface {}
import { Routes, Route } from 'react-router-dom';
import './css/style.css';
import { Card } from './Landing/Card';

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </>
  );
};

export default Home;
