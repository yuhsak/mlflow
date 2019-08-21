import MLflow, { ConstructorProps } from './index';
import { Run, ViewType, RunInfo, RunStatus, Metric, Param, RunTag } from './interface';
export default class Runs extends MLflow {
    constructor(args: ConstructorProps);
    create({ experiment_id, user_id, start_time, tags }: {
        experiment_id: string;
        user_id: string;
        start_time: number;
        tags?: any;
    }): Promise<{
        run: Run;
    }>;
    delete({ run_id }: {
        run_id: string;
    }): Promise<any>;
    restore({ run_id }: {
        run_id: string;
    }): Promise<any>;
    get({ run_id }: {
        run_id: string;
    }): Promise<{
        run: Run;
    }>;
    logMetric({ run_id, key, value, timestamp, step }: {
        run_id: string;
        key: string;
        value: number;
        timestamp: number;
        step?: number;
    }): Promise<any>;
    setTag({ run_id, key, value }: {
        run_id: string;
        key: string;
        value: string;
    }): Promise<any>;
    deleteTag({ run_id, key }: {
        run_id: string;
        key: string;
    }): Promise<any>;
    logParameter({ run_id, key, value }: {
        run_id: string;
        key: string;
        value: string;
    }): Promise<any>;
    logBatch({ run_id, metrics, params, tags }: {
        run_id: string;
        metrics?: Metric[];
        params?: Param[];
        tags?: RunTag[];
    }): Promise<any>;
    search({ experiment_ids, filter, run_view_type, max_results, order_by, page_token }: {
        experiment_ids: string[];
        filter?: string;
        run_view_type?: ViewType;
        max_results?: number;
        order_by?: string[];
        page_token?: string;
    }): Promise<{
        runs: Run[];
        next_page_token: string;
    }>;
    update({ run_id, status, end_time }: {
        run_id: string;
        status: RunStatus;
        end_time: number;
    }): Promise<{
        run_info: RunInfo;
    }>;
}
