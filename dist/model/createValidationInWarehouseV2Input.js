"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidationInWarehouseV2Input = void 0;
var CreateValidationInWarehouseV2Input = (function () {
    function CreateValidationInWarehouseV2Input() {
    }
    CreateValidationInWarehouseV2Input.getAttributeTypeMap = function () {
        return CreateValidationInWarehouseV2Input.attributeTypeMap;
    };
    CreateValidationInWarehouseV2Input.discriminator = undefined;
    CreateValidationInWarehouseV2Input.attributeTypeMap = [
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
    ];
    return CreateValidationInWarehouseV2Input;
}());
exports.CreateValidationInWarehouseV2Input = CreateValidationInWarehouseV2Input;
//# sourceMappingURL=createValidationInWarehouseV2Input.js.map