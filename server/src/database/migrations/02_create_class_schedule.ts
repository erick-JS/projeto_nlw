import knex from 'knex';

//Cria/atualiza as tabelas
export async function up(knex: knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//Caso haja algum problema com as criadas e atualizadas, esta função volta ao estado anterior
export async function down(knex: knex) {
    return knex.schema.dropTable('class_schedule');
}