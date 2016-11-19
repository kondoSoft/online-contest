var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    id    : ObjectId,
    name    : {
      type: String,
      required: [ true, 'El nombre es necesario']
    },
    address : String,
    phone   : {
      type: Number
    },
    reservation     : {
      type: Number,
      required: [ true, 'El numero de reservacion es necesario'],
      unique: true
    },
    email      : {
      type: String,
      required: [ true, 'El correo electronico es necesario']
    },
    checked    : Boolean,
    provider   : String,
    tickets    : [Number]
});

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel
