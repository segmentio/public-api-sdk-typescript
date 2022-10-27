"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse2 = void 0;
var Warehouse2 = (function () {
    function Warehouse2() {
    }
    Warehouse2.getAttributeTypeMap = function () {
        return Warehouse2.attributeTypeMap;
    };
    Warehouse2.discriminator = undefined;
    Warehouse2.attributeTypeMap = [
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
    return Warehouse2;
}());
exports.Warehouse2 = Warehouse2;
//# sourceMappingURL=warehouse2.js.map