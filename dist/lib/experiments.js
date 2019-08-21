"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
class Experiments extends index_1.default {
    constructor(args) {
        super(args);
        this.path = '/experiments';
    }
    create({ name, artifact_location }) {
        return this.req('post', '/create', { name, artifact_location });
    }
    list({ view_type } = {}) {
        return this.req('get', '/list', { view_type });
    }
    get({ experiment_id }) {
        return this.req('get', '/get', { experiment_id });
    }
    delete({ experiment_id }) {
        return this.req('post', '/delete', { experiment_id });
    }
    update({ experiment_id, new_name }) {
        return this.req('post', '/update', { experiment_id, new_name });
    }
    restore({ experiment_id }) {
        return this.req('post', '/restore', { experiment_id });
    }
    setExperimentTag({ experiment_id, key, value }) {
        return this.req('post', 'set-experiment-tag', { experiment_id, key, value });
    }
}
exports.default = Experiments;
