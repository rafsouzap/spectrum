import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = app.listen(3333, () => {
	console.log('Spectrum Server is running on port 3333.');
});

process.on('SIGINT', () => {
	console.log('Shutting down server...');
	server.close(() => {
		console.log('Spectrum Server has been closed.');
		process.exit(0);
	});
});
