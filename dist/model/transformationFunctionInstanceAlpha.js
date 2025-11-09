"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationFunctionInstanceAlpha = void 0;
var TransformationFunctionInstanceAlpha = (function () {
    function TransformationFunctionInstanceAlpha() {
    }
    TransformationFunctionInstanceAlpha.getAttributeTypeMap = function () {
        return TransformationFunctionInstanceAlpha.attributeTypeMap;
    };
    TransformationFunctionInstanceAlpha.discriminator = undefined;
    TransformationFunctionInstanceAlpha.attributeTypeMap = [
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
            name: 'integrationId',
            baseName: 'integrationId',
            type: 'string',
        },
        {
            name: 'classId',
            baseName: 'classId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'encryptedSettings',
            baseName: 'encryptedSettings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'integrationType',
            baseName: 'integrationType',
            type: 'string',
        },
    ];
    return TransformationFunctionInstanceAlpha;
}());
exports.TransformationFunctionInstanceAlpha = TransformationFunctionInstanceAlpha;
//# sourceMappingURL=transformationFunctionInstanceAlpha.js.map