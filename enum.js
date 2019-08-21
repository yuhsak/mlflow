"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewType;
(function (ViewType) {
    ViewType["ACTIVE_ONLY"] = "ACTIVE_ONLY";
    ViewType["DELETED_ONLY"] = "DELETED_ONLY";
    ViewType["ALL"] = "ALL";
})(ViewType = exports.ViewType || (exports.ViewType = {}));
var RunStatus;
(function (RunStatus) {
    RunStatus["RUNNING"] = "RUNNNING";
    RunStatus["SCHEDULED"] = "SCHEDULED";
    RunStatus["FINISHED"] = "FINISHED";
    RunStatus["FAILED"] = "FAILED";
    RunStatus["KILLED"] = "KILLED";
})(RunStatus = exports.RunStatus || (exports.RunStatus = {}));
var LifecycleStage;
(function (LifecycleStage) {
    LifecycleStage["active"] = "active";
    LifecycleStage["deleted"] = "deleted";
})(LifecycleStage = exports.LifecycleStage || (exports.LifecycleStage = {}));
