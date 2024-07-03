# mlflow
MLflow api client for Node.js

## Install

```sh
npm install mlflow
```

## Usage

```js
const MLflow = require('mlflow')
const {ViewType, RunState, LifecysleStage} = require('mlflow/enum')

const client = new MLflow({endpoint: 'http://localhost:5000'})

const {Experiments, Runs, Metrics, Artifacts} = client

;(async () => {
	
	// Get list of all experiments
	const {experiments} = await Experiments.search(max_results: 1000)
	const experiment = experiments[0]
	
	// Get list of all active runs in specific experiment
	const {runs} = await Runs.search({
		experiment_ids: [experiment.experiment_id],
		run_view_type: ViewType.ACTIVE_ONLY
	})
	const {info, data} = runs[0]
	const {run_id} = info
	
	// Get metric history
	const auc_history = await Metrics.getHistory({run_id, metric_key: 'auc_score'})
	console.log(auc_history)
	
})()
```

## API

### MLflow

#### Constructor

- **endpoint**:string (required)
	- MLflow server's endpoint url
	- ex.) 'http://localhost:5000'

- **heders**:object (option)
	- Key-Value pairs of RequestHeaders which will be passed for fetch method. 
	- ex.) {Authorization: 'Bearer abcdefgh'}

#### Props 

- [Experiments](https://github.com/Yuhsak/mlflow/blob/master/src/experiments.ts)
- [Runs](https://github.com/Yuhsak/mlflow/blob/master/src/runs.ts)
- [Metrics](https://github.com/Yuhsak/mlflow/blob/master/src/metrics.ts)
- [Artifacts](https://github.com/Yuhsak/mlflow/blob/master/src/artifacts.ts)

### [Experiments](https://github.com/Yuhsak/mlflow/blob/master/src/experiments.ts)

- create()
- restore()
- get()
- list()
- update()
- delete()
- setExperimentTag()

### [Runs](https://github.com/Yuhsak/mlflow/blob/master/src/runs.ts)

- create()
- restore()
- get()
- search()
- update()
- delete()
- logMetric()
- logParam()
- setTag()
- deleteTag()
- logBatch()

### [Metrics](https://github.com/Yuhsak/mlflow/blob/master/src/metrics.ts)

- getHistory()

### [Artifacts](https://github.com/Yuhsak/mlflow/blob/master/src/artifacts.ts)

- list()

For more details about each method's args, also see [MLflow REST API Official Docs](https://mlflow.org/docs/latest/rest-api.html).  
API's are basically implemented just as they are.
