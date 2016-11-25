var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    id    : ObjectId,
    name    : {
      type: String
    },
    address : String,
    phone   : {
      type: Number
    },
    reservation     : {
      type: Number,
      unique: true
    },
    email      : {
      type: String
    },
    checked    : Boolean,
    provider   : String,
    tickets    : { type: Schema.ObjectId, ref: 'Ticket' }
});

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel
