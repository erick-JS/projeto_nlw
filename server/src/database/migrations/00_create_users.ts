import knex from 'knex';

//Cria/atualiza as tabelas
export async function up(knex: knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

//Caso haja algum problema com as criadas e atualizadas, esta função volta ao estado anterior
export async function down(knex: knex){
    return knex.schema.dropTable('users');
}