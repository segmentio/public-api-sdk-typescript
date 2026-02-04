"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudiencePreviewInput = void 0;
var CreateAudiencePreviewInput = (function () {
    function CreateAudiencePreviewInput() {
    }
    CreateAudiencePreviewInput.getAttributeTypeMap = function () {
        return CreateAudiencePreviewInput.attributeTypeMap;
    };
    CreateAudiencePreviewInput.discriminator = undefined;
    CreateAudiencePreviewInput.attributeTypeMap = [
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinition',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CreateAudiencePreviewInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'CreateAudiencePreviewOptions',
        },
    ];
    return CreateAudiencePreviewInput;
}());
exports.CreateAudiencePreviewInput = CreateAudiencePreviewInput;
(function (CreateAudiencePreviewInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["LINKED"] = 'LINKED'] = "LINKED";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CreateAudiencePreviewInput.AudienceTypeEnum || (CreateAudiencePreviewInput.AudienceTypeEnum = {}));
})(CreateAudiencePreviewInput = exports.CreateAudiencePreviewInput || (exports.CreateAudiencePreviewInput = {}));
exports.CreateAudiencePreviewInput = CreateAudiencePreviewInput;
//# sourceMappingURL=createAudiencePreviewInput.js.map