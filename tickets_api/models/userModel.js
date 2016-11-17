var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    id    : ObjectId,
    name    : String,
    reservation     : Number,
    email      : String,
    checked    : Boolean,
    tickets    : [Number]
});

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel
