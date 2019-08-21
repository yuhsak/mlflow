export interface ConstructorProps {
    endpoint: string;
    headers?: HeadersInit;
    version?: string;
}
export default class MLflow {
    endpoint: string;
    headers?: HeadersInit;
    version?: string;
    contentType: string;
    accept: string;
    path: string;
    constructor({ endpoint, headers, version }: ConstructorProps);
    requestUrl(path: string): string;
    req(method: string, path: string, param: any, headers?: HeadersInit): Promise<any>;
    readonly Experiments: Experiments;
    readonly Runs: Runs;
    readonly Metrics: Metrics;
    readonly Artifacts: Artifacts;
}
import Experiments from './experiments';
import Runs from './runs';
import Metrics from './metrics';
import Artifacts from './artifacts';
