"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseMetadataV1 = void 0;
var WarehouseMetadataV1 = (function () {
    function WarehouseMetadataV1() {
    }
    WarehouseMetadataV1.getAttributeTypeMap = function () {
        return WarehouseMetadataV1.attributeTypeMap;
    };
    WarehouseMetadataV1.discriminator = undefined;
    WarehouseMetadataV1.attributeTypeMap = [
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
    return WarehouseMetadataV1;
}());
exports.WarehouseMetadataV1 = WarehouseMetadataV1;
//# sourceMappingURL=warehouseMetadataV1.js.map