import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing';
import SearchSpecialists from './pages/search-specialists';

function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/search-specialists" element={<SearchSpecialists />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
