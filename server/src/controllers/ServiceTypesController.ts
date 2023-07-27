import { Request, Response } from 'express';
import db from '../database/connection';

export default class ServiceTypesController {
	async index(request: Request, response: Response): Promise<Response> {
		const serviceTypes = await db('service_types').select(['*']);
		return response.send(serviceTypes);
	}
}
