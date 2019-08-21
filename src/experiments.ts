import MLflow, { ConstructorProps } from './index'
import {ViewType, Experiment, RunInfo} from './interface'

export default class Experiments extends MLflow {

	constructor(args:ConstructorProps) {
		super(args)
		this.path = '/experiments'
	}
	
	create({name, artifact_location}:{name:string, artifact_location:string}):Promise<{experiment_id: string}> {
		return this.req('post', '/create', {name, artifact_location})
	}
	
	list({view_type}:{view_type?: ViewType}={}):Promise<{experiments:Experiment[]}> {
		return this.req('get', '/list', {view_type})
	}
	
	get({experiment_id}:{experiment_id:string}):Promise<{experiment:Experiment, runs:RunInfo[]}> {
		return this.req('get', '/get', {experiment_id})
	}
	
	delete({experiment_id}:{experiment_id:string}) {
		return this.req('post', '/delete', {experiment_id})
	}
	
	update({experiment_id, new_name}:{experiment_id:string, new_name:string}) {
		return this.req('post', '/update', {experiment_id, new_name})
	}

	restore({experiment_id}:{experiment_id:string}) {
		return this.req('post', '/restore', {experiment_id})
	}

	setExperimentTag({experiment_id, key, value}:{experiment_id:string, key:string, value:string}) {
		return this.req('post', 'set-experiment-tag', {experiment_id, key, value})
	}
	
}
