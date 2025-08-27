"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudiencePreviewBetaInput = void 0;
var CreateAudiencePreviewBetaInput = (function () {
    function CreateAudiencePreviewBetaInput() {
    }
    CreateAudiencePreviewBetaInput.getAttributeTypeMap = function () {
        return CreateAudiencePreviewBetaInput.attributeTypeMap;
    };
    CreateAudiencePreviewBetaInput.discriminator = undefined;
    CreateAudiencePreviewBetaInput.attributeTypeMap = [
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CreateAudiencePreviewBetaInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'CreateAudiencePreviewOptions',
        },
    ];
    return CreateAudiencePreviewBetaInput;
}());
exports.CreateAudiencePreviewBetaInput = CreateAudiencePreviewBetaInput;
(function (CreateAudiencePreviewBetaInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["LINKED"] = 'LINKED'] = "LINKED";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CreateAudiencePreviewBetaInput.AudienceTypeEnum || (CreateAudiencePreviewBetaInput.AudienceTypeEnum = {}));
})(CreateAudiencePreviewBetaInput = exports.CreateAudiencePreviewBetaInput || (exports.CreateAudiencePreviewBetaInput = {}));
exports.CreateAudiencePreviewBetaInput = CreateAudiencePreviewBetaInput;
//# sourceMappingURL=createAudiencePreviewBetaInput.js.map