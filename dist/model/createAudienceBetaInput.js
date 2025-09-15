"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceBetaInput = void 0;
var CreateAudienceBetaInput = (function () {
    function CreateAudienceBetaInput() {
    }
    CreateAudienceBetaInput.getAttributeTypeMap = function () {
        return CreateAudienceBetaInput.attributeTypeMap;
    };
    CreateAudienceBetaInput.discriminator = undefined;
    CreateAudienceBetaInput.attributeTypeMap = [
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
            type: 'CreateAudienceBetaInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptions',
        },
    ];
    return CreateAudienceBetaInput;
}());
exports.CreateAudienceBetaInput = CreateAudienceBetaInput;
(function (CreateAudienceBetaInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["LINKED"] = 'LINKED'] = "LINKED";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CreateAudienceBetaInput.AudienceTypeEnum || (CreateAudienceBetaInput.AudienceTypeEnum = {}));
})(CreateAudienceBetaInput = exports.CreateAudienceBetaInput || (exports.CreateAudienceBetaInput = {}));
exports.CreateAudienceBetaInput = CreateAudienceBetaInput;
//# sourceMappingURL=createAudienceBetaInput.js.map