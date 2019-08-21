import {RunStatus, LifecycleStage} from './enum'

export interface Experiment {
	experiment_id: string,
	name: string,
	artifact_location: string,
	lifecycle_stage: LifecycleStage,
	last_update_time: number,
	creation_time: number,
	tags: ExperimentTag[]
}

export interface ExperimentTag {
	key: string,
	value: string
}

export interface FileInfo {
	path: string,
	id_dir: boolean,
	file_size: number
}

export interface Run {
	info: RunInfo,
	data: RunData
}

export interface RunInfo {
	run_id: string,
	experiment_id: string,
	user_id: string,
	status: RunStatus,
	start_time: number,
	end_time: number,
	artifact_uri: string,
	lifecycle_stage: LifecycleStage
}

export interface RunData {
	metrics: Metric[],
	params: Param[],
	tags: RunTag[]
}

export interface Metric {
	key: string,
	value: number,
	timestamp: number,
	step: number
}

export interface Param {
	key: string,
	value: string
}

export interface RunTag {
	key: string,
	value: string
}