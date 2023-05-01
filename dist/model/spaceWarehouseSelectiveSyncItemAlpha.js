"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceWarehouseSelectiveSyncItemAlpha = void 0;
var SpaceWarehouseSelectiveSyncItemAlpha = (function () {
    function SpaceWarehouseSelectiveSyncItemAlpha() {
    }
    SpaceWarehouseSelectiveSyncItemAlpha.getAttributeTypeMap = function () {
        return SpaceWarehouseSelectiveSyncItemAlpha.attributeTypeMap;
    };
    SpaceWarehouseSelectiveSyncItemAlpha.discriminator = undefined;
    SpaceWarehouseSelectiveSyncItemAlpha.attributeTypeMap = [
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
    return SpaceWarehouseSelectiveSyncItemAlpha;
}());
exports.SpaceWarehouseSelectiveSyncItemAlpha = SpaceWarehouseSelectiveSyncItemAlpha;
//# sourceMappingURL=spaceWarehouseSelectiveSyncItemAlpha.js.map