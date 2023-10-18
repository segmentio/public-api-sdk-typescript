"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertFunctionInstance = void 0;
var InsertFunctionInstance = (function () {
    function InsertFunctionInstance() {
    }
    InsertFunctionInstance.getAttributeTypeMap = function () {
        return InsertFunctionInstance.attributeTypeMap;
    };
    InsertFunctionInstance.discriminator = undefined;
    InsertFunctionInstance.attributeTypeMap = [
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
    return InsertFunctionInstance;
}());
exports.InsertFunctionInstance = InsertFunctionInstance;
//# sourceMappingURL=insertFunctionInstance.js.map