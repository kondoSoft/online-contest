var mongoose = require('mongoose')
var userModel = require('./userModel')
var User = mongoose.model('users')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var TicketSchema = new Schema({
    id    : ObjectId,
    _property    : { type: [ObjectId], ref: 'User' },
    folio  :  Number
})


var TicketModel = mongoose.model('Tickets', TicketSchema);

module.exports = TicketModel
