import { Request, Response } from 'express';
import db from '../database/connection';

export default class StatesController {
	async index(request: Request, response: Response): Promise<Response> {
		response.setHeader('Content-Type', 'application/json');
		try {
			const states = await db('states').select();
			return states.length
				? response.status(200).json(states)
				: response.status(404).json({ error: 'Could not find states' });
		} catch (error) {
			return response.status(500).json({ error });
		}
	}
}
