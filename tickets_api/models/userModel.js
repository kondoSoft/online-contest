var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    id    : ObjectId,
    name    : String,
    address : String,
    phone   : Number,
    reservation     : Number,
    email      : String,
    checked    : Boolean,
    provider   : String,
    tickets    : [Number]
});

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel
