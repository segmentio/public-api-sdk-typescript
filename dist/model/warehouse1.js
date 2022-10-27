"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse1 = void 0;
var Warehouse1 = (function () {
    function Warehouse1() {
    }
    Warehouse1.getAttributeTypeMap = function () {
        return Warehouse1.attributeTypeMap;
    };
    Warehouse1.discriminator = undefined;
    Warehouse1.attributeTypeMap = [
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
    return Warehouse1;
}());
exports.Warehouse1 = Warehouse1;
//# sourceMappingURL=warehouse1.js.map