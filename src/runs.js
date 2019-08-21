const MLflow = require('./index')

module.exports = class Runs extends MLflow {
	
	constructor(args) {
		super(args)
		this.path = 'runs'
	}
	
	create({experiment_id, user_id, run_name, source_type, source_name, start_time, ...param}) {
		this.req('post', '/create', {experiment_id, user_id, run_name, source_type, source_name, start_time, ...param})
	}
	
	delete({run_id}) {
		return this.req('post', '/delete', {run_id})
	}
	
	restore({run_id}) {
		return this.req('post', '/restore', {run_id})
	}
	
	get({run_uuid}) {
		return this.req('get', '/get', {run_uuid})
	}
	
	logMetric({run_uuid, key, value, timestamp}) {
		return this.req('post', '/log-metric', {run_uuid, key, value, timestamp})
	}
	
	setTag({run_uuid, key, value}) {
		return this.req('post', '/set-tag', {run_uuid, key, value})
	}

	deleteTag({run_id, key}) {
		return this.req('post', '/delete-tag', {run_id, key})
	}
	
	logParameter({run_uuid, key, value}) {
		return this.req('post', '/log-parameter', {run_uuid, key, value})
	}

	logBatch({run_id, metrics, params, tags}) {
		return this.req('post', '/log-batch', {run_id, metrics, params, tags})
	}
	
	search({experiment_ids, ...param}) {
		return this.req('post', '/search', {experiment_ids, ...param})
	}
	
	update({run_uuid, status, end_time}) {
		return this.req('post', '/update', {run_uuid, status, end_time})
	}
	
}
