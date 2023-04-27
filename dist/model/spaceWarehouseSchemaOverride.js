"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceWarehouseSchemaOverride = void 0;
var SpaceWarehouseSchemaOverride = (function () {
    function SpaceWarehouseSchemaOverride() {
    }
    SpaceWarehouseSchemaOverride.getAttributeTypeMap = function () {
        return SpaceWarehouseSchemaOverride.attributeTypeMap;
    };
    SpaceWarehouseSchemaOverride.discriminator = undefined;
    SpaceWarehouseSchemaOverride.attributeTypeMap = [
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
        {
            name: 'collection',
            baseName: 'collection',
            type: 'string',
        },
        {
            name: 'source',
            baseName: 'source',
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
    return SpaceWarehouseSchemaOverride;
}());
exports.SpaceWarehouseSchemaOverride = SpaceWarehouseSchemaOverride;
//# sourceMappingURL=spaceWarehouseSchemaOverride.js.map