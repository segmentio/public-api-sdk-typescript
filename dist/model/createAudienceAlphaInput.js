"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceAlphaInput = void 0;
var CreateAudienceAlphaInput = (function () {
    function CreateAudienceAlphaInput() {
    }
    CreateAudienceAlphaInput.getAttributeTypeMap = function () {
        return CreateAudienceAlphaInput.attributeTypeMap;
    };
    CreateAudienceAlphaInput.discriminator = undefined;
    CreateAudienceAlphaInput.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinition',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CreateAudienceAlphaInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptions',
        },
    ];
    return CreateAudienceAlphaInput;
}());
exports.CreateAudienceAlphaInput = CreateAudienceAlphaInput;
(function (CreateAudienceAlphaInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CreateAudienceAlphaInput.AudienceTypeEnum || (CreateAudienceAlphaInput.AudienceTypeEnum = {}));
})(CreateAudienceAlphaInput = exports.CreateAudienceAlphaInput || (exports.CreateAudienceAlphaInput = {}));
exports.CreateAudienceAlphaInput = CreateAudienceAlphaInput;
//# sourceMappingURL=createAudienceAlphaInput.js.map