var db_utils = require('./db_utils');
var table_creation = {
  'create_rt_sent_train' : db_utils.queryString(function() {/*!
    CREATE TABLE rt_sent_train (
    PhraseId    integer,
    SentenceId  integer,
    Phrase      text,
    Sentiment   integer
    );
  */})
};

module.exports = table_creation;
