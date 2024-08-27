"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseETLSyncOutput = void 0;
var ReverseETLSyncOutput = (function () {
    function ReverseETLSyncOutput() {
    }
    ReverseETLSyncOutput.getAttributeTypeMap = function () {
        return ReverseETLSyncOutput.attributeTypeMap;
    };
    ReverseETLSyncOutput.discriminator = undefined;
    ReverseETLSyncOutput.attributeTypeMap = [
        {
            name: 'syncId',
            baseName: 'syncId',
            type: 'string',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'syncStatus',
            baseName: 'syncStatus',
            type: 'string',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'string',
        },
        {
            name: 'startedAt',
            baseName: 'startedAt',
            type: 'string',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
        {
            name: 'extractPhase',
            baseName: 'extractPhase',
            type: 'SyncExtractPhase',
        },
        {
            name: 'loadPhase',
            baseName: 'loadPhase',
            type: 'SyncLoadPhase',
        },
        {
            name: 'error',
            baseName: 'error',
            type: 'string',
        },
        {
            name: 'errorCode',
            baseName: 'errorCode',
            type: 'string',
        },
    ];
    return ReverseETLSyncOutput;
}());
exports.ReverseETLSyncOutput = ReverseETLSyncOutput;
//# sourceMappingURL=reverseETLSyncOutput.js.map