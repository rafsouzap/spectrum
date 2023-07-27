import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users', table => {
		table.increments('user_id').defaultTo(knex.fn.uuid()).primary();
		table.string('name', 100).notNullable();
		table.string('image').notNullable();
		table.string('whatsapp', 12).notNullable();
		table.string('bio', 250).notNullable();
		table.string('state', 2).notNullable();
		table.string('professional_license', 14).notNullable();
		table.string('personal_id_number', 11).notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());

		table
			.uuid('specialty_id')
			.notNullable()
			.references('specialty_id')
			.inTable('specialties')
			.onUpdate('CASCADE')
			.onDelete('RESTRICT');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users');
}
