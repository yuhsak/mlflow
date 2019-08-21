# mlflow
MLflow api client for Node.js

## Install

```sh
npm install mlflow
```

## Usage

```js
const MLflow = require('mlflow')

const client = new MLflow({endpoint: 'http://localhost:5000'})

const {Experiments, Runs, Metrics, Artifacts} = client

;(async () => {
	
	// Get list of all experiments
	const {experiments} = await Experiments.list()
	const experiment = experiments[0]
	
	// Get list of all runs in specific experiment
	const {runs} = await Runs.search({experiment_ids: [experiment.experiment_id]})
	const {info, data} = runs[0]
	const {run_id} = info
	
	// Get metric history
	const auc_history = await Metrics.getHistory({run_id, metric_key: 'auc_score'})
	console.log(auc_history)
	
})()
```

## API

### MLflow

#### constructor

- **endpoint**:string (required)
	- MLflow server's endpoint url
	- ex.) 'http://localhost:5000'

- **heders**:object (option)
	- Key-Value pairs of RequestHeaders which will be passed for fetch method. 
	- ex.) {Authorization: 'Bearer abcdefgh'}

#### props and methods

- [**Experiments**](https://github.com/Yuhsak/mlflow/blob/master/src/experiments.js)
	- create
	- restore
	- get
	- list
	- update
	- delete
	- setExperimentTag

- [**Runs**](https://github.com/Yuhsak/mlflow/blob/master/src/runs.js)
	- create
	- restore
	- get
	- search
	- update
	- delete
	- logMetric
	- logParam
	- setTag
	- deleteTag
	- logBatch

- [**Metrics**](https://github.com/Yuhsak/mlflow/blob/master/src/metrics.js)
	- getHistory

- [**Artifacts**](https://github.com/Yuhsak/mlflow/blob/master/src/artifacts.js)
	- list

For more details about each method's args, also see [MLflow REST API Official Docs](https://mlflow.org/docs/latest/rest-api.html).  
API's are basically implemented just as they are.
