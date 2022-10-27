"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSyncOverrideV1 = void 0;
var WarehouseSyncOverrideV1 = (function () {
    function WarehouseSyncOverrideV1() {
    }
    WarehouseSyncOverrideV1.getAttributeTypeMap = function () {
        return WarehouseSyncOverrideV1.attributeTypeMap;
    };
    WarehouseSyncOverrideV1.discriminator = undefined;
    WarehouseSyncOverrideV1.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'collection',
            baseName: 'collection',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'property',
            baseName: 'property',
            type: 'string',
        },
    ];
    return WarehouseSyncOverrideV1;
}());
exports.WarehouseSyncOverrideV1 = WarehouseSyncOverrideV1;
//# sourceMappingURL=warehouseSyncOverrideV1.js.map