"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseMetadata = void 0;
var WarehouseMetadata = (function () {
    function WarehouseMetadata() {
    }
    WarehouseMetadata.getAttributeTypeMap = function () {
        return WarehouseMetadata.attributeTypeMap;
    };
    WarehouseMetadata.discriminator = undefined;
    WarehouseMetadata.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logos',
            baseName: 'logos',
            type: 'Logos2',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
    ];
    return WarehouseMetadata;
}());
exports.WarehouseMetadata = WarehouseMetadata;
//# sourceMappingURL=warehouseMetadata.js.map