import { Cards } from '@/components';
import { Outlet } from 'react-router-dom';

export function Landing() {
  return (
    <>
      <h2 className="subt__cat container__card1">
        Elige una categoria de empleo
      </h2>
      <Cards />
      <Outlet />
    </>
  );
}
