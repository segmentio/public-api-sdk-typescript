"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInsertFunctionInstanceAlphaInput = void 0;
var CreateInsertFunctionInstanceAlphaInput = (function () {
    function CreateInsertFunctionInstanceAlphaInput() {
    }
    CreateInsertFunctionInstanceAlphaInput.getAttributeTypeMap = function () {
        return CreateInsertFunctionInstanceAlphaInput.attributeTypeMap;
    };
    CreateInsertFunctionInstanceAlphaInput.discriminator = undefined;
    CreateInsertFunctionInstanceAlphaInput.attributeTypeMap = [
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
    return CreateInsertFunctionInstanceAlphaInput;
}());
exports.CreateInsertFunctionInstanceAlphaInput = CreateInsertFunctionInstanceAlphaInput;
//# sourceMappingURL=createInsertFunctionInstanceAlphaInput.js.map