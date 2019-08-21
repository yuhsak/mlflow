import MLflow, { ConstructorProps } from './index';
import { Metric } from './interface';
export default class Metrics extends MLflow {
    constructor(args: ConstructorProps);
    getHistory({ run_id, metric_key }: {
        run_id: string;
        metric_key: string;
    }): Promise<{
        metrics: Metric[];
    }>;
}
