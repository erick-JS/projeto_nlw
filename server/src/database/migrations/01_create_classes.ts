import knex from 'knex';

//Cria/atualiza as tabelas
export async function up(knex: knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//Caso haja algum problema com as criadas e atualizadas, esta função volta ao estado anterior
export async function down(knex: knex) {
    return knex.schema.dropTable('classes');
}