import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('schedules', table => {
		table.increments('schedule_id').defaultTo(knex.fn.uuid()).primary();
		table.float('price').notNullable();
		table.string('description', 100).notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());

		table
			.uuid('service_type_id')
			.notNullable()
			.references('service_type_id')
			.inTable('service_types')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');

		table
			.uuid('user_id')
			.notNullable()
			.references('user_id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('schedules');
}
