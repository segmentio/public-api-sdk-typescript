"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWarehouseV1Input = void 0;
var CreateWarehouseV1Input = (function () {
    function CreateWarehouseV1Input() {
    }
    CreateWarehouseV1Input.getAttributeTypeMap = function () {
        return CreateWarehouseV1Input.attributeTypeMap;
    };
    CreateWarehouseV1Input.discriminator = undefined;
    CreateWarehouseV1Input.attributeTypeMap = [
        {
            name: 'metadataId',
            baseName: 'metadataId',
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
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'disconnectAllSources',
            baseName: 'disconnectAllSources',
            type: 'boolean',
        },
    ];
    return CreateWarehouseV1Input;
}());
exports.CreateWarehouseV1Input = CreateWarehouseV1Input;
//# sourceMappingURL=createWarehouseV1Input.js.map