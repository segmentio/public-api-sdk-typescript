"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
var Warehouse = (function () {
    function Warehouse() {
    }
    Warehouse.getAttributeTypeMap = function () {
        return Warehouse.attributeTypeMap;
    };
    Warehouse.discriminator = undefined;
    Warehouse.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'Metadata2',
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
            type: 'any',
        },
    ];
    return Warehouse;
}());
exports.Warehouse = Warehouse;
//# sourceMappingURL=warehouse.js.map