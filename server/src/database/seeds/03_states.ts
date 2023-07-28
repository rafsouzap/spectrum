import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('states').del();

	// Inserts seed entries
	await knex('states').insert([
		{ name: 'Acre', state: 'AC' },
		{ name: 'Alagoas', state: 'AL' },
		{ name: 'Amapá', state: 'AP' },
		{ name: 'Amazonas', state: 'AM' },
		{ name: 'Bahia', state: 'BA' },
		{ name: 'Ceará', state: 'CE' },
    { name: 'Distrito Federal', state: 'DF' },
		{ name: 'Espírito Santo', state: 'ES' },
		{ name: 'Goiás', state: 'GO' },
		{ name: 'Maranhão', state: 'MA' },
		{ name: 'Mato Grosso', state: 'MT' },
		{ name: 'Mato Grosso do Sul', state: 'MS' },
		{ name: 'Minas Gerais', state: 'MG' },
		{ name: 'Pará', state: 'PA' },
		{ name: 'Paraíba', state: 'PB' },
		{ name: 'Paraná', state: 'PR' },
		{ name: 'Pernambuco', state: 'PE' },
		{ name: 'Piauí', state: 'PI' },
		{ name: 'Rio de Janeiro', state: 'RJ' },
		{ name: 'Rio Grande do Norte', state: 'RN' },
		{ name: 'Rio Grande do Sul', state: 'RS' },
		{ name: 'Rondônia', state: 'RO' },
		{ name: 'Roraima', state: 'RR' },
		{ name: 'Santa Catarina', state: 'SC' },
		{ name: 'São Paulo', state: 'SP' },
		{ name: 'Sergipe', state: 'SE' },
		{ name: 'Tocantins', state: 'TO' },
	]);
}
