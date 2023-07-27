import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('service_types', table => {
		table.increments('service_type_id').defaultTo(knex.fn.uuid()).primary();
		table.string('description', 50).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('service_types');
}
