import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	console.error('Element with id "root" not found.');
}
