"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWarehouseV2Input = void 0;
var CreateWarehouseV2Input = (function () {
    function CreateWarehouseV2Input() {
    }
    CreateWarehouseV2Input.getAttributeTypeMap = function () {
        return CreateWarehouseV2Input.attributeTypeMap;
    };
    CreateWarehouseV2Input.discriminator = undefined;
    CreateWarehouseV2Input.attributeTypeMap = [
        {
            name: 'credentialId',
            baseName: 'credentialId',
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
    ];
    return CreateWarehouseV2Input;
}());
exports.CreateWarehouseV2Input = CreateWarehouseV2Input;
//# sourceMappingURL=createWarehouseV2Input.js.map