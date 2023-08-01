import React, { ReactElement, useState, FormEvent } from 'react';

import api from '../../services/api';

function SearchSpecialists(): ReactElement {
	const [specialties, setSpecialties] = useState([]);

	async function searchSpecialists(event: FormEvent) {
		event.preventDefault();

		const response = await api.get('specialties');
		setSpecialties(response.data);
	}

	return (
		<div id="page-search-specialists">
			Teste
			<form id="search-specialists" onSubmit={searchSpecialists}>
				<button type="submit">Buscar</button>
			</form>
		</div>
	);
}

export default SearchSpecialists;
