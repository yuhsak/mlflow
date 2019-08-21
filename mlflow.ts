import qs from 'querystring'
import fetch from 'isomorphic-unfetch'

export interface ConstructorProps {
	endpoint: string,
	headers?: HeadersInit,
	version?: string
}

export class MLflowBase {

	endpoint: string
	headers?: HeadersInit
	version?: string
	protected path: string
	
	constructor({endpoint, headers={}, version='2.0'}:ConstructorProps) {
		this.endpoint = endpoint
		this.headers = headers
		this.version = version
		this.path = '/'
	}
	
	protected requestUrl(path:string):string {
		return `${this.endpoint}/api/${this.version}/mlflow${this.path}${path}`
	}
	
	protected async req(method:string, path:string, param:any, headers:HeadersInit={}):Promise<any> {
		const url = this.requestUrl(path)
		const requestHeaders = {...this.headers, ...headers, ...{'Accept': 'application/json'}}
		
		const promise = (async () => {
			if( ['put', 'post', 'patch'].some(m => new RegExp(m, 'i').test(method)) ){
				const body = JSON.stringify(param)
				console.log(body)
				return fetch(url, {method, headers: {...requestHeaders, 'Content-Type': 'application/json'}, body})
			} else {
				const query = param
					? '?' + qs.stringify(
							Object.entries(param)
								.filter(e => e[1] !== undefined)
								.reduce((obj, e) => ({...obj, [e[0]]:e[1]}), {})
						)
					: ''
				const urlWithParam = `${url}${query}`
				return fetch(urlWithParam, {method, headers: requestHeaders})
			}
		})()
		
		try {
			const r = await promise.then(async r => {
				const {status, statusText} = r
				const data = await r.json().catch(() => null)
				if(status == 200){
					return data
				} else {
					throw new Error(JSON.stringify({status, statusText, data}))
				}
			})
			return r
		} catch(T_T) {
			throw new Error(T_T)
		}	
	}
	
}

export default class MLflow extends MLflowBase {
	
	constructor(args:ConstructorProps) {
		super(args)
	}

	get Experiments() {
		return new Experiments({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Runs() {
		return new Runs({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Metrics() {
		return new Metrics({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Artifacts() {
		return new Artifacts({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}

}

import Experiments from './experiments'
import Runs from './runs'
import Metrics from './metrics'
import Artifacts from './artifacts'
