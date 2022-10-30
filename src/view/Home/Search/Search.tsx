import React from 'react';
export interface SearchInterface { }
import { useNavigate } from 'react-router-dom';

const Search: React.FC<SearchInterface> = () => {

	const history = useNavigate()

	const submitHandler = (e) => {
		e.preventDefault();
		const keyword = e.currentTarget.keyword.value.trim();
		console.log(`ESTA ES LA KEYWORD ${keyword}`)

		if (keyword.length === 0) {
			console.warn(<h5>Ingrese una busqueda...</h5>)
		} else {
			history(`/results?name=${keyword}`)
			e.currentTarget.keyword.value = "";

		}
	}


	return (
		<form onSubmit={submitHandler}>
			<input type='text' name='keyword' placeholder='Buscar por palabra clave...' />

			<button type='submit' >Buscar</button>
		</form>
	);
};

export default Search;
