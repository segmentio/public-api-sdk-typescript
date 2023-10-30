"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseV1 = void 0;
var WarehouseV1 = (function () {
    function WarehouseV1() {
    }
    WarehouseV1.getAttributeTypeMap = function () {
        return WarehouseV1.attributeTypeMap;
    };
    WarehouseV1.discriminator = undefined;
    WarehouseV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'WarehouseMetadataV1',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return WarehouseV1;
}());
exports.WarehouseV1 = WarehouseV1;
//# sourceMappingURL=warehouseV1.js.map