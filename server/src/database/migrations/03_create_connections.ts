import knex from 'knex';

//Cria/atualiza as tabelas
export async function up(knex: knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

//Caso haja algum problema com as criadas e atualizadas, esta função volta ao estado anterior
export async function down(knex: knex) {
    return knex.schema.dropTable('connections');
}