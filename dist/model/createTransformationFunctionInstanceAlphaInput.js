"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransformationFunctionInstanceAlphaInput = void 0;
var CreateTransformationFunctionInstanceAlphaInput = (function () {
    function CreateTransformationFunctionInstanceAlphaInput() {
    }
    CreateTransformationFunctionInstanceAlphaInput.getAttributeTypeMap = function () {
        return CreateTransformationFunctionInstanceAlphaInput.attributeTypeMap;
    };
    CreateTransformationFunctionInstanceAlphaInput.discriminator = undefined;
    CreateTransformationFunctionInstanceAlphaInput.attributeTypeMap = [
        {
            name: 'functionId',
            baseName: 'functionId',
            type: 'string',
        },
        {
            name: 'integrationId',
            baseName: 'integrationId',
            type: 'string',
        },
        {
            name: 'integrationType',
            baseName: 'integrationType',
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
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return CreateTransformationFunctionInstanceAlphaInput;
}());
exports.CreateTransformationFunctionInstanceAlphaInput = CreateTransformationFunctionInstanceAlphaInput;
//# sourceMappingURL=createTransformationFunctionInstanceAlphaInput.js.map