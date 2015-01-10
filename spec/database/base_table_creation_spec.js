var models = require(__dirname + '/../../models'),
    sql = require(__dirname + '/../../sql');

// var support = require(__dirname + '/../support/index'),
//     config = require(__dirname + '/../../config/config'),
//     Sequelize = require('sequelize'),
//     sequelize = new Sequelize(config.);

describe('Create table for training data', function() {
  it('creates the table', function() {
    // console.log(sql.table_creation.create_rt_sent_train);
    models.sequelize.query(sql.table_creation.create_rt_sent_train).then(function(table) {
      console.log(table);
      console.log('wut');
    });
  });
});

describe('Create table for testing data', function() {
});
