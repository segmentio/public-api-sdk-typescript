"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncV1 = void 0;
var SyncV1 = (function () {
    function SyncV1() {
    }
    SyncV1.getAttributeTypeMap = function () {
        return SyncV1.attributeTypeMap;
    };
    SyncV1.discriminator = undefined;
    SyncV1.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'start',
            baseName: 'start',
            type: 'string',
        },
        {
            name: 'end',
            baseName: 'end',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'number',
        },
        {
            name: 'humanDuration',
            baseName: 'humanDuration',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'notices',
            baseName: 'notices',
            type: 'Array<SyncNoticeV1>',
        },
    ];
    return SyncV1;
}());
exports.SyncV1 = SyncV1;
//# sourceMappingURL=syncV1.js.map