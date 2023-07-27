import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('specialties').del();

	// Inserts seed entries
	await knex('specialties').insert([
		{ name: 'Fisioterapia', council: 'CREFITO' },
		{ name: 'Fonoaudiologia', council: 'CRFa' },
		{ name: 'Neuropediatria', council: 'CRM' },
		{ name: 'Nutrição', council: 'CRN' },
		{ name: 'Pediatria', council: 'CRM' },
		{ name: 'Psicologia', council: 'CRP' },
		{ name: 'Psicopedagogia', council: 'CFEP' },
		{ name: 'Terapia Ocupacional', council: 'CREFITO' },
	]);
}
