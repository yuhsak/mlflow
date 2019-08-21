"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = __importDefault(require("querystring"));
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
class MLflow {
    constructor({ endpoint, headers = {}, version = '2.0' }) {
        this.endpoint = endpoint;
        this.headers = headers;
        this.version = version;
        this.contentType = 'application/json';
        this.accept = 'application/json';
        this.path = '/';
    }
    requestUrl(path) {
        return `${this.endpoint}/api/${this.version}/mlflow${this.path}${path}`;
    }
    async req(method, path, param, headers = {}) {
        const url = this.requestUrl(path);
        const requestHeaders = { ...this.headers, ...headers, ...{ 'Accept': this.accept } };
        const promise = (async () => {
            if (['put', 'post', 'patch'].some(m => new RegExp(m, 'i').test(method))) {
                const body = JSON.stringify(param);
                console.log(body);
                return isomorphic_unfetch_1.default(url, { method, headers: { ...requestHeaders, 'Content-Type': this.contentType }, body });
            }
            else {
                const query = param
                    ? '?' + querystring_1.default.stringify(Object.entries(param)
                        .filter(e => e[1] !== undefined)
                        .reduce((obj, e) => ({ ...obj, [e[0]]: e[1] }), {}))
                    : '';
                const urlWithParam = `${url}${query}`;
                return isomorphic_unfetch_1.default(urlWithParam, { method, headers: requestHeaders });
            }
        })();
        try {
            const r = await promise.then(async (r) => {
                const { status, statusText } = r;
                const data = await r.json().catch(() => null);
                if (status == 200) {
                    return data;
                }
                else {
                    throw new Error(JSON.stringify({ status, statusText, data }));
                }
            });
            return r;
        }
        catch (T_T) {
            throw new Error(T_T);
        }
    }
    get Experiments() {
        return new experiments_1.default({ endpoint: this.endpoint, version: this.version, headers: this.headers });
    }
    get Runs() {
        return new runs_1.default({ endpoint: this.endpoint, version: this.version, headers: this.headers });
    }
    get Metrics() {
        return new metrics_1.default({ endpoint: this.endpoint, version: this.version, headers: this.headers });
    }
    get Artifacts() {
        return new artifacts_1.default({ endpoint: this.endpoint, version: this.version, headers: this.headers });
    }
}
exports.default = MLflow;
const experiments_1 = __importDefault(require("./experiments"));
const runs_1 = __importDefault(require("./runs"));
const metrics_1 = __importDefault(require("./metrics"));
const artifacts_1 = __importDefault(require("./artifacts"));
