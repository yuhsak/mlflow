"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
class Metrics extends index_1.default {
    constructor(args) {
        super(args);
        this.path = '/metrics';
    }
    getHistory({ run_id, metric_key }) {
        return this.req('get', '/get-history', { run_id, run_uuid: run_id, metric_key });
    }
}
exports.default = Metrics;
