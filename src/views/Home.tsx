import { Routes, Route } from 'react-router-dom'

import './style.css'

import { lazy, Suspense } from 'react'

export function Home() {
    const Landing = lazy(() =>
        import('@/views').then((module) => ({
            default: module.Landing,
        }))
    )
    const Categories = lazy(() =>
        import('@/views').then((module) => ({
            default: module.Categories,
        }))
    )
    const Results = lazy(() =>
        import('@/views').then((module) => ({
            default: module.Results,
        }))
    )

    return (
        <Suspense>
            <h2 className="subtitle">
                Ofertas de Empleo disponibles en AgarraLaPala
            </h2>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Suspense>
    )
/*
import { useLottie } from 'lottie-react';
import homeAnimation from '@/assets/home.json';
import { LogoutButton } from '@/components';

export default function Home() {
  const options = {
    animationData: homeAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">This is the Home</h1>
      <div className="h-32 w-32">{View}</div>
      <LogoutButton />
    </div>
  );
}
*/
