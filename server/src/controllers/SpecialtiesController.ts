import { Request, Response } from 'express';
import db from '../database/connection';

export default class SpecialtiesController {
	async index(request: Request, response: Response): Promise<Response> {
		try {
			const specialties = await db('specialties').select();
			return specialties.length
				? response.status(200).json(specialties)
				: response.status(404).json({ error: 'Could not find specialties' });
		} catch (error) {
			return response.status(500).json({ error });
		}
	}
}
