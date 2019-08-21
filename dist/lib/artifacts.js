"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
class Artifacts extends index_1.default {
    constructor(args) {
        super(args);
        this.path = '/artifacts';
    }
    list({ run_id, path }) {
        return this.req('get', '/list', { run_id, run_uuid: run_id, path });
    }
}
exports.default = Artifacts;
