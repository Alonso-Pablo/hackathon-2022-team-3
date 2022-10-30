import React from 'react';
export interface ResultsInterface { }
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../Search';
import Pagination from '@mui/material/Pagination';


const Results: React.FC<ResultsInterface> = () => {

	let query = new URLSearchParams(window.location.search);

	//console.log(query)

	let keyword = query.get('name');

	//console.log(keyword);

	const [results, setResults] = useState([]);

	useEffect(() => {
		const endPoint = `https://www.getonbrd.com/api/v0/search/jobs?query=${keyword}`
		//console.log(endPoint)
		axios.get(endPoint)
			.then(response => {
				const jobData = response.data;
				const jobAt = jobData.data;
				console.log(jobAt);

				setResults(jobAt)
			})

	}, [setResults]);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + " ..." : str;

	}


	return (
		<>

			<h2 className='subt__cat'>Empleos encontrados para la busqueda: {results}</h2>


			<article className='container'>
				{
					results.map((el, i) => {
						return (
							<div key={i} className='container__card'>

								<h1>{el.attributes.title}</h1>
								<div className='container__description'>
									<p className='container__description-title'>Descripcion:</p>
									{/*<p>{truncate(el.attributes.description, 150)}</p>*/}
									<p dangerouslySetInnerHTML={{ __html: truncate(el.attributes.description, 150) }}></p>
								</div>





								<div className='container__description'>
									<a href={el.links.public_url} target='blank' rel='noopener noreferrer'>Visita esta oferta en GetOnBoard</a>
								</div>
							</div>
						)
					})
				}

			</article>



			<Search />
		</>
	);
};

export default Results;
