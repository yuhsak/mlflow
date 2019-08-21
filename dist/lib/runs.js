"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
class Runs extends index_1.default {
    constructor(args) {
        super(args);
        this.path = '/runs';
    }
    create({ experiment_id, user_id, start_time, tags }) {
        return this.req('post', '/create', { experiment_id, user_id, start_time, tags });
    }
    delete({ run_id }) {
        return this.req('post', '/delete', { run_id, run_uuid: run_id });
    }
    restore({ run_id }) {
        return this.req('post', '/restore', { run_id, run_uuid: run_id });
    }
    get({ run_id }) {
        return this.req('get', '/get', { run_id });
    }
    logMetric({ run_id, key, value, timestamp, step }) {
        return this.req('post', '/log-metric', { run_id, run_uuid: run_id, key, value, timestamp, step });
    }
    setTag({ run_id, key, value }) {
        return this.req('post', '/set-tag', { run_id, run_uuid: run_id, key, value });
    }
    deleteTag({ run_id, key }) {
        return this.req('post', '/delete-tag', { run_id, run_uuid: run_id, key });
    }
    logParameter({ run_id, key, value }) {
        return this.req('post', '/log-parameter', { run_id, run_uuid: run_id, key, value });
    }
    logBatch({ run_id, metrics, params, tags }) {
        return this.req('post', '/log-batch', { run_id, run_uuid: run_id, metrics, params, tags });
    }
    search({ experiment_ids, filter, run_view_type, max_results, order_by, page_token }) {
        return this.req('post', '/search', { experiment_ids, filter, run_view_type, max_results, order_by, page_token });
    }
    update({ run_id, status, end_time }) {
        return this.req('post', '/update', { run_id, run_uuid: run_id, status, end_time });
    }
}
exports.default = Runs;
