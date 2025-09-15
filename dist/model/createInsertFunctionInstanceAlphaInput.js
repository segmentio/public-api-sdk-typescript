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
        {
            name: 'integrationType',
            baseName: 'integrationType',
            type: 'CreateInsertFunctionInstanceAlphaInput.IntegrationTypeEnum',
        },
    ];
    return CreateInsertFunctionInstanceAlphaInput;
}());
exports.CreateInsertFunctionInstanceAlphaInput = CreateInsertFunctionInstanceAlphaInput;
(function (CreateInsertFunctionInstanceAlphaInput) {
    var IntegrationTypeEnum;
    (function (IntegrationTypeEnum) {
        IntegrationTypeEnum[IntegrationTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        IntegrationTypeEnum[IntegrationTypeEnum["JOURNEY"] = 'JOURNEY'] = "JOURNEY";
        IntegrationTypeEnum[IntegrationTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(IntegrationTypeEnum = CreateInsertFunctionInstanceAlphaInput.IntegrationTypeEnum || (CreateInsertFunctionInstanceAlphaInput.IntegrationTypeEnum = {}));
})(CreateInsertFunctionInstanceAlphaInput = exports.CreateInsertFunctionInstanceAlphaInput || (exports.CreateInsertFunctionInstanceAlphaInput = {}));
exports.CreateInsertFunctionInstanceAlphaInput = CreateInsertFunctionInstanceAlphaInput;
//# sourceMappingURL=createInsertFunctionInstanceAlphaInput.js.map