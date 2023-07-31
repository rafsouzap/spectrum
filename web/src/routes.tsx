import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing';

function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
