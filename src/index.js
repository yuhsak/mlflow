const qs = require('querystring')
const fetch = require('isomorphic-unfetch')

module.exports = class MLflow {
	
	constructor({endpoint, headers={}, version='2.0'}){
		this.endpoint = endpoint
		this.headers = headers
		this.version = version
		this.contentType = 'application/json'
		this.accept = 'application/json'
	}
	
	requestUrl(path) {
		return `${this.endpoint}/api/${this.version}/mlflow/${this.path||''}${path}`
	}
	
	async req(method, path, param, headers={}){
		const url = this.requestUrl(path)
		const requestHeaders = {...this.headers, ...headers, ...{'Accept': this.accept}}
		
		const promise = (async () => {
			if( ['put', 'post', 'patch'].some(m => new RegExp(m, 'i').test(method)) ){
				const body = JSON.stringify(param)
				return fetch(url, {method, headers: {...requestHeaders, 'Content-Type': this.contentType}, body})
			} else {
				const query = param ? '?'+qs.stringify(param) : ''
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
	
	get Experiments() {
		return new Experiments({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Runs() {
		return new Runs({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Params() {
		return new Params({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Metrics() {
		return new Metrics({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
	get Artifacts() {
		return new Artifacts({endpoint: this.endpoint, version: this.version, headers: this.headers})
	}
	
}

const Experiments = require('./experiments')
const Runs = require('./runs')
const Params = require('./params')
const Metrics = require('./metrics')
const Artifacts = require('./artifacts')
