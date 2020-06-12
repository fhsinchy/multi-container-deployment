/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('notes');
};
