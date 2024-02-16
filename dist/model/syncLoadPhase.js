"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncLoadPhase = void 0;
var SyncLoadPhase = (function () {
    function SyncLoadPhase() {
    }
    SyncLoadPhase.getAttributeTypeMap = function () {
        return SyncLoadPhase.attributeTypeMap;
    };
    SyncLoadPhase.discriminator = undefined;
    SyncLoadPhase.attributeTypeMap = [
        {
            name: 'deliverSuccessCount',
            baseName: 'deliverSuccessCount',
            type: 'string',
        },
        {
            name: 'deliverFailureCount',
            baseName: 'deliverFailureCount',
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
    return SyncLoadPhase;
}());
exports.SyncLoadPhase = SyncLoadPhase;
//# sourceMappingURL=syncLoadPhase.js.map