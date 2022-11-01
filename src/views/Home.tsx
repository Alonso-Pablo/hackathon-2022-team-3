import { Routes, Route } from 'react-router-dom';

import './style.css';

import { lazy, Suspense } from 'react';

export function Home() {
  const Landing = lazy(() =>
    import('@/views').then((module) => ({
      default: module.Landing,
    }))
  );
  const JobsSearcher = lazy(() =>
    import('@/views').then((module) => ({
      default: module.JobsSearcher,
    }))
  );
  const Results = lazy(() =>
    import('@/views').then((module) => ({
      default: module.Results,
    }))
  );

  return (
    <>
      <h2 className="text-xl text-center font-semibold whitespace-nowrap dark:text-white">
        Ofertas de Empleo disponibles en AgarraLaPala
      </h2>
      <Suspense fallback={''}>
        <Routes>
          <Route path="*" element={<Landing />}>
            <Route path="*" element={<JobsSearcher />} />
          </Route>
          <Route path="/results" element={<Results />} />
        </Routes>
      </Suspense>
    </>
  );
}
