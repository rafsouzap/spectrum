import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('service_types').del();

	// Inserts seed entries
	await knex('service_types').insert([
		{ description: 'Preço Social' },
		{ description: 'Gratuidade' },
	]);
}
