var data = require('./effective-engineer.json');

module.exports = function(app) {
	// Load attribution
	var attrModel = app.models.Attribution;
	attrModel.create(data.attribution);
}
