"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseV2 = void 0;
var WarehouseV2 = (function () {
    function WarehouseV2() {
    }
    WarehouseV2.getAttributeTypeMap = function () {
        return WarehouseV2.attributeTypeMap;
    };
    WarehouseV2.discriminator = undefined;
    WarehouseV2.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'credentialId',
            baseName: 'credentialId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];
    return WarehouseV2;
}());
exports.WarehouseV2 = WarehouseV2;
//# sourceMappingURL=warehouseV2.js.map