"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertFunctionInstanceAlpha = void 0;
var InsertFunctionInstanceAlpha = (function () {
    function InsertFunctionInstanceAlpha() {
    }
    InsertFunctionInstanceAlpha.getAttributeTypeMap = function () {
        return InsertFunctionInstanceAlpha.attributeTypeMap;
    };
    InsertFunctionInstanceAlpha.discriminator = undefined;
    InsertFunctionInstanceAlpha.attributeTypeMap = [
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
    ];
    return InsertFunctionInstanceAlpha;
}());
exports.InsertFunctionInstanceAlpha = InsertFunctionInstanceAlpha;
//# sourceMappingURL=insertFunctionInstanceAlpha.js.map