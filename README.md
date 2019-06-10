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

const {Experiments, Runs, Metrics, Params, Artifacts} = client

;(async () => {
	
	// Get list of all experiments
	const {experiments} = await Experiments.list()
	const experiment = experiments[0]
	
	// Get list of all runs in specific experiment
	const {runs} = await Runs.search({experiment_ids: [experiment.experiment_id]})
	const {info, data} = runs[0]
	const {run_uuid} = info
	
	// Get metric from a run
	const auc_score = Params.get({run_uuid, metric_key: 'auc_score'})
	console.log(auc_score)
	
})()
