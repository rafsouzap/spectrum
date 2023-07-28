import { Request, Response } from 'express';
import db from '../database/connection';

export default class ServiceTypesController {
	async index(request: Request, response: Response): Promise<Response> {
    response.setHeader('Content-Type', 'application/json');
		try {
			const serviceTypes = await db('service_types').select();
			return serviceTypes.length
				? response.status(200).json(serviceTypes)
				: response.status(404).json({ error: 'Could not find service types' });
		} catch (error) {
			return response.status(500).json({ error });
		}
	}
}
