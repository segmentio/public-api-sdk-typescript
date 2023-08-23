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
            name: 'type',
            baseName: 'type',
            type: 'CreateInsertFunctionInstanceAlphaInput.TypeEnum',
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
(function (CreateInsertFunctionInstanceAlphaInput) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["INSERT_FUNCTION_DESTINATION"] = 'INSERT_FUNCTION_DESTINATION'] = "INSERT_FUNCTION_DESTINATION";
    })(TypeEnum = CreateInsertFunctionInstanceAlphaInput.TypeEnum || (CreateInsertFunctionInstanceAlphaInput.TypeEnum = {}));
})(CreateInsertFunctionInstanceAlphaInput = exports.CreateInsertFunctionInstanceAlphaInput || (exports.CreateInsertFunctionInstanceAlphaInput = {}));
exports.CreateInsertFunctionInstanceAlphaInput = CreateInsertFunctionInstanceAlphaInput;
//# sourceMappingURL=createInsertFunctionInstanceAlphaInput.js.map