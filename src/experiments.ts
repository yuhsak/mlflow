import { MLflowBase, ConstructorProps } from './mlflow'
import { Experiment, RunInfo } from './interface'
import { ViewType } from './enum'

export default class Experiments extends MLflowBase {

	constructor(args:ConstructorProps) {
		super(args)
		this.path = '/experiments'
	}
	
	create({name, artifact_location}:{
		name: string,
		artifact_location: string
	}):Promise<{
		experiment_id: string
	}> {
		return this.req('post', '/create', {name, artifact_location})
	}
	
	search({filter, run_view_type, max_results, order_by, page_token}:{
		filter?: string,
		run_view_type?: ViewType,
		max_results?: number,
		order_by?: string[],
		page_token?: string
	}):Promise<{
		experiments: Experiment[],
		next_page_token: string
	}> {
		return this.req('post', '/search', {filter, run_view_type, max_results, order_by, page_token})
	}
	
	get({experiment_id}:{
		experiment_id: string
	}):Promise<{
		experiment: Experiment,
		runs: RunInfo[]
	}> {
		return this.req('get', '/get', {experiment_id})
	}
	
	delete({experiment_id}:{
		experiment_id: string
	}) {
		return this.req('post', '/delete', {experiment_id})
	}
	
	update({experiment_id, new_name}:{
		experiment_id:string,
		new_name:string
	}) {
		return this.req('post', '/update', {experiment_id, new_name})
	}

	restore({experiment_id}:{
		experiment_id: string
	}) {
		return this.req('post', '/restore', {experiment_id})
	}

	setExperimentTag({experiment_id, key, value}:{
		experiment_id: string,
		key: string,
		value: string
	}) {
		return this.req('post', 'set-experiment-tag', {experiment_id, key, value})
	}
	
}
