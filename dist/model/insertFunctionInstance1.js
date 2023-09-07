"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertFunctionInstance1 = void 0;
var InsertFunctionInstance1 = (function () {
    function InsertFunctionInstance1() {
    }
    InsertFunctionInstance1.getAttributeTypeMap = function () {
        return InsertFunctionInstance1.attributeTypeMap;
    };
    InsertFunctionInstance1.discriminator = undefined;
    InsertFunctionInstance1.attributeTypeMap = [
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
    return InsertFunctionInstance1;
}());
exports.InsertFunctionInstance1 = InsertFunctionInstance1;
//# sourceMappingURL=insertFunctionInstance1.js.map