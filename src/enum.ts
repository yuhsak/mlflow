export enum ViewType {
	ACTIVE_ONLY = 'ACTIVE_ONLY',
	DELETED_ONLY = 'DELETED_ONLY',
	ALL = 'ALL'
}

export enum RunStatus {
	RUNNING = 'RUNNING',
	SCHEDULED = 'SCHEDULED',
	FINISHED = 'FINISHED',
	FAILED = 'FAILED',
	KILLED = 'KILLED'
}

export enum LifecycleStage {
	active = 'active',
	deleted = 'deleted'
}