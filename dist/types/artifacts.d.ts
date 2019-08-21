import MLflow, { ConstructorProps } from './index';
import { FileInfo } from './interface';
export default class Artifacts extends MLflow {
    constructor(args: ConstructorProps);
    list({ run_id, path }: {
        run_id: string;
        path: string;
    }): Promise<{
        root_uri: string;
        files: FileInfo;
    }>;
}
