const MLflow = require('./index')

module.exports = class Artifacts extends MLflow {
	
	constructor(args) {
		super(args)
		this.path = 'artifacts'
	}
	
	list({run_id, path}) {
		return this.req('get', '/list', {run_id, path})
	}
	
}
