import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('states', table => {
		table.string('state', 2).notNullable().primary();
		table.string('name', 30).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('states');
}
