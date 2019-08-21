import { MLflowBase, ConstructorProps } from './base'
import { FileInfo } from './interface';

export default class Artifacts extends MLflowBase {
	
	constructor(args:ConstructorProps) {
		super(args)
		this.path = '/artifacts'
	}
	
	list({run_id, path}:{run_id:string, path:string}):Promise<{root_uri:string, files:FileInfo}> {
		return this.req('get', '/list', {run_id, run_uuid: run_id, path})
	}
	
}
