"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseETLSyncStatus = void 0;
var ReverseETLSyncStatus = (function () {
    function ReverseETLSyncStatus() {
    }
    ReverseETLSyncStatus.getAttributeTypeMap = function () {
        return ReverseETLSyncStatus.attributeTypeMap;
    };
    ReverseETLSyncStatus.discriminator = undefined;
    ReverseETLSyncStatus.attributeTypeMap = [
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
    return ReverseETLSyncStatus;
}());
exports.ReverseETLSyncStatus = ReverseETLSyncStatus;
//# sourceMappingURL=reverseETLSyncStatus.js.map