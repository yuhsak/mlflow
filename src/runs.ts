import { MLflowBase, ConstructorProps } from './mlflow'
import { Run, RunInfo, Metric, Param, RunTag } from './interface';
import { ViewType, RunStatus } from './enum'

export default class Runs extends MLflowBase {

	constructor(args:ConstructorProps) {
		super(args)
		this.path = '/runs'
	}
	
	create({experiment_id, user_id, start_time, tags}:{experiment_id: string, user_id: string, start_time: number, tags?: any}):Promise<{run: Run}> {
		return this.req('post', '/create', {experiment_id, user_id, start_time, tags})
	}
	
	delete({run_id}:{run_id:string}) {
		return this.req('post', '/delete', {run_id, run_uuid: run_id})
	}
	
	restore({run_id}:{run_id:string}) {
		return this.req('post', '/restore', {run_id, run_uuid: run_id})
	}
	
	get({run_id}:{run_id:string}):Promise<{run: Run}> {
		return this.req('get', '/get', {run_id})
	}
	
	logMetric({run_id, key, value, timestamp, step}:{run_id:string, key:string, value:number, timestamp:number, step?:number}) {
		return this.req('post', '/log-metric', {run_id, run_uuid: run_id, key, value, timestamp, step})
	}
	
	setTag({run_id, key, value}:{run_id:string, key:string, value:string}) {
		return this.req('post', '/set-tag', {run_id, run_uuid: run_id, key, value})
	}

	deleteTag({run_id, key}:{run_id:string, key:string}) {
		return this.req('post', '/delete-tag', {run_id, run_uuid: run_id, key})
	}
	
	logParameter({run_id, key, value}:{run_id:string, key:string, value:string}) {
		return this.req('post', '/log-parameter', {run_id, run_uuid: run_id, key, value})
	}

	logBatch({run_id, metrics, params, tags}:{run_id:string, metrics?:Metric[], params?:Param[], tags?:RunTag[]}) {
		return this.req('post', '/log-batch', {run_id, run_uuid: run_id, metrics, params, tags})
	}
	
	search({experiment_ids, filter, run_view_type, max_results, order_by, page_token}:{experiment_ids:string[], filter?:string, run_view_type?:ViewType, max_results?:number, order_by?:string[], page_token?:string}):Promise<{runs:Run[], next_page_token:string}> {
		return this.req('post', '/search', {experiment_ids, filter, run_view_type, max_results, order_by, page_token})
	}
	
	update({run_id, status, end_time}:{run_id:string, status:RunStatus, end_time:number}):Promise<{run_info: RunInfo}> {
		return this.req('post', '/update', {run_id, run_uuid: run_id, status, end_time})
	}
	
}
