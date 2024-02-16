"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncExtractPhase = void 0;
var SyncExtractPhase = (function () {
    function SyncExtractPhase() {
    }
    SyncExtractPhase.getAttributeTypeMap = function () {
        return SyncExtractPhase.attributeTypeMap;
    };
    SyncExtractPhase.discriminator = undefined;
    SyncExtractPhase.attributeTypeMap = [
        {
            name: 'addedCount',
            baseName: 'addedCount',
            type: 'string',
        },
        {
            name: 'updatedCount',
            baseName: 'updatedCount',
            type: 'string',
        },
        {
            name: 'deletedCount',
            baseName: 'deletedCount',
            type: 'string',
        },
        {
            name: 'extractCount',
            baseName: 'extractCount',
            type: 'string',
        },
        {
            name: 'errorCode',
            baseName: 'errorCode',
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
    ];
    return SyncExtractPhase;
}());
exports.SyncExtractPhase = SyncExtractPhase;
//# sourceMappingURL=syncExtractPhase.js.map