var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Utils      = require('./utils')

var bodyParser = require('body-parser')

exports.mount = function (app) {

	var jsonParser = bodyParser.json()
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }));


	app.get('/API/jobs', function(req, res){
		Jobs.retrieve(function(x){res.send({Jobs: x})
    })
  });


	app.post('/API/jobs', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
			var newValues = Jobs.updateOrCreate(req.body)
		res.send(req.body)
	});

}

