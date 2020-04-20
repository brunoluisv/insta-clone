
exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table) {
    table.string('id').primary();
    table.string('username').notNullable();
    table.string('location');
    table.string('avatar').notNullable();
    table.string('legend').notNullable();
    table.string('picture').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
