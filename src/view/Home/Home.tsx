
import React from 'react';
export interface HomeInterface { }
import { Routes, Route } from 'react-router-dom';




import './css/style.css';
import { Categories } from './Categories';
import { Landing } from './Landing';
import { Results } from './Search/Results';







const Home: React.FC<HomeInterface> = () => {






	return (
		<>



			<h2 className='subtitle'>Ofertas de Empleo disponibles en AgarraLaPala</h2>


			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/results' element={<Results />} />
			</Routes>


		</>
	);
};

export default Home;
