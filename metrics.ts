import { MLflowBase, ConstructorProps } from './mlflow'
import { Metric } from './interface';

export default class Metrics extends MLflowBase {

	constructor(args:ConstructorProps) {
		super(args)
		this.path = '/metrics'
	}
	
	getHistory({run_id, metric_key}:{run_id:string, metric_key:string}):Promise<{metrics: Metric[]}> {
		return this.req('get', '/get-history', {run_id, run_uuid: run_id, metric_key})
	}
	
}
