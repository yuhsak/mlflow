const MLflow = require('./index')

module.exports = class Runs extends MLflow {
	
	constructor(args) {
		super(args)
		this.path = 'runs'
	}
	
	create({experiment_id, user_id, start_time, tags}) {
		return this.req('post', '/create', {experiment_id, user_id, start_time, tags})
	}
	
	delete({run_id}) {
		return this.req('post', '/delete', {run_id})
	}
	
	restore({run_id}) {
		return this.req('post', '/restore', {run_id})
	}
	
	get({run_id}) {
		return this.req('get', '/get', {run_id})
	}
	
	logMetric({run_id, key, value, timestamp, step}) {
		return this.req('post', '/log-metric', {run_id, key, value, timestamp, step})
	}
	
	setTag({run_id, key, value}) {
		return this.req('post', '/set-tag', {run_id, key, value})
	}

	deleteTag({run_id, key}) {
		return this.req('post', '/delete-tag', {run_id, key})
	}
	
	logParameter({run_id, key, value}) {
		return this.req('post', '/log-parameter', {run_id, key, value})
	}

	logBatch({run_id, metrics, params, tags}) {
		return this.req('post', '/log-batch', {run_id, metrics, params, tags})
	}
	
	search({experiment_ids, filter, run_view_type, max_results, order_by, page_token}) {
		return this.req('post', '/search', {experiment_ids, filter, run_view_type, max_results, order_by, page_token})
	}
	
	update({run_id, status, end_time}) {
		return this.req('post', '/update', {run_id, status, end_time})
	}
	
}
