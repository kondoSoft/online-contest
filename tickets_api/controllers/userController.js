var helpers = require('../config/helperFunctions')
var UserModel = require('../models/userModel')

var users = {}
var max_user_id = 0

module.exports = function(server) {

  server.get('/users', (req, res, next) => {
    helpers.success(res, next, users)
  })

  server.get('/user/:id', (req, res, next) => {
    req.assert('id', 'Id es necesario y debe ser numerico').notEmpty().isInt()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors[0], 400)
      next()
    }
    if (typeof(users[req.params.id]) === 'undefined'){
      helpers.failure(res, next, 'El usuario especificado no puede ser encontrado en la base de datos', 404)
      next()
    }
    helpers.success(res, next, users[parseInt(req.params.id)])
    next()
  })

  server.post('/user', (req, res, next) => {
    req.assert('name', 'Nombre es necesario').notEmpty()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors, 400)
      next()
    }
    var user = new UserModel()
    user.name = req.params.name
    user.reservation = req.params.reservation
    user.email = req.params.email
    user.checked = req.params.checked
    user.tickets = req.params.tickets
    user.save(function(err){
      if(err){
        helpers.failure(res, next, 'Error al guardar el usuario', 500)
      }
      helpers.success(res, next, user)
      next()
    })
  })

  server.put('/user/:id', (req, res, next) => {
    req.assert('id', 'Id es necesario y debe ser numerico').notEmpty().isInt()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors[0], 400)
      next()
    }
    if (typeof(users[req.params.id]) === 'undefined'){
      helpers.failure(res, next, 'El usuario especificado no puede ser encontrado en la base de datos', 404)
      next()
    }
    var user = users[parseInt(req.params.id)]
    var updates = req.params
    for(var field in updates){
      user[field] = updates[field]
    }
    helpers.success(res, next, user)
    next()
  })

  server.del('/user/:id', (req, res, next) => {
    req.assert('id', 'Id es necesario y debe ser numerico').notEmpty().isInt()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors[0], 400)
      next()
    }
    if (typeof(users[req.params.id]) === 'undefined'){
      helpers.failure(res, next, 'El usuario especificado no puede ser encontrado en la base de datos', 404)
      next()
    }
    delete users[parseInt(req.params.id)]
    helpers.success(res, next, [])
    next()
  })
}
