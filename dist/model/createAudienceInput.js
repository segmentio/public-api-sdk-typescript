"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceInput = void 0;
var CreateAudienceInput = (function () {
    function CreateAudienceInput() {
    }
    CreateAudienceInput.getAttributeTypeMap = function () {
        return CreateAudienceInput.attributeTypeMap;
    };
    CreateAudienceInput.discriminator = undefined;
    CreateAudienceInput.attributeTypeMap = [
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
            type: 'CreateAudienceInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptions',
        },
    ];
    return CreateAudienceInput;
}());
exports.CreateAudienceInput = CreateAudienceInput;
(function (CreateAudienceInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["LINKED"] = 'LINKED'] = "LINKED";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CreateAudienceInput.AudienceTypeEnum || (CreateAudienceInput.AudienceTypeEnum = {}));
})(CreateAudienceInput = exports.CreateAudienceInput || (exports.CreateAudienceInput = {}));
exports.CreateAudienceInput = CreateAudienceInput;
//# sourceMappingURL=createAudienceInput.js.map