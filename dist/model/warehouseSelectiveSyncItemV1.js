"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSelectiveSyncItemV1 = void 0;
var WarehouseSelectiveSyncItemV1 = (function () {
    function WarehouseSelectiveSyncItemV1() {
    }
    WarehouseSelectiveSyncItemV1.getAttributeTypeMap = function () {
        return WarehouseSelectiveSyncItemV1.attributeTypeMap;
    };
    WarehouseSelectiveSyncItemV1.discriminator = undefined;
    WarehouseSelectiveSyncItemV1.attributeTypeMap = [
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
            name: 'warehouseId',
            baseName: 'warehouseId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'properties',
            baseName: 'properties',
            type: '{ [key: string]: any; }',
        },
    ];
    return WarehouseSelectiveSyncItemV1;
}());
exports.WarehouseSelectiveSyncItemV1 = WarehouseSelectiveSyncItemV1;
//# sourceMappingURL=warehouseSelectiveSyncItemV1.js.map