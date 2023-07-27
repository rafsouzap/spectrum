import { Request, Response } from 'express';
import db from '../database/connection';

export default class SpecialtiesController {
	async index(request: Request, response: Response): Promise<Response> {
		const specialties = await db('specialties').select(['*']);
		return response.send(specialties);
	}
}
