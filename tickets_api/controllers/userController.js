var helpers = require('../config/helperFunctions')
var UserModel = require('../models/userModel')


module.exports = function(server) {

  server.get('/users', (req, res, next) => {
    UserModel.find({}, function (err, users) {
      helpers.success(res, next, users)
    });
  })

  server.get('/user/:id', (req, res, next) => {
    req.assert('id', 'Id es necesario y debe ser numerico').notEmpty()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors[0], 400)
      return next()
    }
    UserModel.findOne({ _id: req.params.id}, function (err, user) {
      if(err){
        helpers.failure(res, next, 'Se produjo un error al recoger al usuario de la base de datos', 500)
        return next()
      }
      if (user === null){
        helpers.failure(res, next, 'El usuario especificado no puede ser encontado', 404)
        return next()
      }
      helpers.success(res, next, user)
      return next()
    });
  })

  server.post('/user', (req, res, next) => {
    req.assert('name', 'Nombre es necesario').notEmpty()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors, 400)
      return next()
    }

    var user = new UserModel()
    var error
    user.name = req.params.name
    user.address = req.params.address
    user.phone  = req.params.phone
    user.reservation = req.params.reservation
    user.email = req.params.email
    user.checked = req.params.checked
    user.provider = req.params.provider
    user.tickets = req.params.tickets
    user.save(function(err){
      if(err){
        helpers.failure(res, next, 'Error al guardar el usuario', 500)
        return next()
      }
      helpers.success(res, next, user)
      return next()
    })
  })

  server.put('/user/:id', (req, res, next) => {
    req.assert('id', 'Id es necesario y debe ser numerico').notEmpty()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors[0], 400)
      return next()
    }
    UserModel.findOne({ _id: req.params.id}, function (err, user) {
      if(err){
        helpers.failure(res, next, 'Se produjo un error al recoger al usuario de la base de datos', 500)
        return next()
      }
      if (user === null || user === 'undefined'){
        helpers.failure(res, next, 'El usuario especificado no puede ser encontado', 404)
        return next()
      }
      var updates = req.params
      delete updates.id
      for(var field in updates){
        user[field] = updates[field]
      }
      user.save(function(err){
        if(err){
          helpers.failure(res, next, errors, 500)
          return next()
        }
      helpers.success(res, next, user)
      return next()
    })
  })
})

  server.del('/user/:id', (req, res, next) => {
    req.assert('id', 'Id es necesario y debe ser numerico').notEmpty()
    var errors = req.validationErrors()
    if(errors){
      helpers.failure(res, next, errors[0], 400)
      next()
    }
    UserModel.findOne({ _id: req.params.id}, function (err, user) {
      if(err){
        helpers.failure(res, next, 'Se produjo un error al recoger al usuario de la base de datos', 500)
        return next()
      }
      if (user === null || user === 'undefined'){
        helpers.failure(res, next, 'El usuario especificado no puede ser encontado', 404)
        return next()
      }
      user.remove(function(err){
        if(err){
          helpers.failure(res, next, 'Error eliminando usuario de la base de batos', 500)
          return next()
        }
      helpers.success(res, next, user)
      return next()
      })
    })
  })
}
