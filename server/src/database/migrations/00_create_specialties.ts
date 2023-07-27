import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('specialties', table => {
		table.increments('specialty_id').defaultTo(knex.fn.uuid()).primary();
		table.string('name', 70).notNullable();
		table.string('council', 30).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('specialties');
}
