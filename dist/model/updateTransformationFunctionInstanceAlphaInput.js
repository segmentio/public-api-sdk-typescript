"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransformationFunctionInstanceAlphaInput = void 0;
var UpdateTransformationFunctionInstanceAlphaInput = (function () {
    function UpdateTransformationFunctionInstanceAlphaInput() {
    }
    UpdateTransformationFunctionInstanceAlphaInput.getAttributeTypeMap = function () {
        return UpdateTransformationFunctionInstanceAlphaInput.attributeTypeMap;
    };
    UpdateTransformationFunctionInstanceAlphaInput.discriminator = undefined;
    UpdateTransformationFunctionInstanceAlphaInput.attributeTypeMap = [
        {
            name: 'instanceId',
            baseName: 'instanceId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'integrationType',
            baseName: 'integrationType',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return UpdateTransformationFunctionInstanceAlphaInput;
}());
exports.UpdateTransformationFunctionInstanceAlphaInput = UpdateTransformationFunctionInstanceAlphaInput;
//# sourceMappingURL=updateTransformationFunctionInstanceAlphaInput.js.map