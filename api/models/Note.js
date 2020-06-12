const { Model } = require('objection');

class Token extends Model {
  static get tableName() {
    return 'notes';
  }
}

module.exports = Token;
