var models = require(__dirname + '/../../models'),
    sleep = require('sleep'),
    sql = require(__dirname + '/../../sql');

describe('Create table for training data', function() {
  it('creates the table', function() {
    models.sequelize.authenticate()
      .complete(function(err) {
        expect(err).toBe(null);
      });
    // console.log(sql.table_creation.create_rt_sent_train);
    // models.sequelize.query(sql.table_creation.create_rt_sent_train).then(function(table) {
    models.sequelize.query('select * from test_table_1;').then(function(row) {
      console.log(row);
      console.log('Query was run successfully.');
    }).done();
    sleep.sleep(2);
    expect(true).toBe(null);
  });
});

describe('Create table for testing data', function() {
});
