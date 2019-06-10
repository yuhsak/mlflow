const MLflow = require('./index')

module.exports = class Params extends MLflow {
	
	constructor(args) {
		super(args)
		this.path = 'params'
	}
	
	get({run_uuid, param_name}) {
		return this.req('get', '/get', {run_uuid, param_name})
	}
	
}
