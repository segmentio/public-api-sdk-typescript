"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbtModelSyncTrigger = void 0;
var DbtModelSyncTrigger = (function () {
    function DbtModelSyncTrigger() {
    }
    DbtModelSyncTrigger.getAttributeTypeMap = function () {
        return DbtModelSyncTrigger.attributeTypeMap;
    };
    DbtModelSyncTrigger.discriminator = undefined;
    DbtModelSyncTrigger.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
    ];
    return DbtModelSyncTrigger;
}());
exports.DbtModelSyncTrigger = DbtModelSyncTrigger;
//# sourceMappingURL=dbtModelSyncTrigger.js.map