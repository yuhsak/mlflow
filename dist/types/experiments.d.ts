import MLflow, { ConstructorProps } from './index';
import { ViewType, Experiment, RunInfo } from './interface';
export default class Experiments extends MLflow {
    constructor(args: ConstructorProps);
    create({ name, artifact_location }: {
        name: string;
        artifact_location: string;
    }): Promise<{
        experiment_id: string;
    }>;
    list({ view_type }?: {
        view_type?: ViewType;
    }): Promise<{
        experiments: Experiment[];
    }>;
    get({ experiment_id }: {
        experiment_id: string;
    }): Promise<{
        experiment: Experiment;
        runs: RunInfo[];
    }>;
    delete({ experiment_id }: {
        experiment_id: string;
    }): Promise<any>;
    update({ experiment_id, new_name }: {
        experiment_id: string;
        new_name: string;
    }): Promise<any>;
    restore({ experiment_id }: {
        experiment_id: string;
    }): Promise<any>;
    setExperimentTag({ experiment_id, key, value }: {
        experiment_id: string;
        key: string;
        value: string;
    }): Promise<any>;
}
