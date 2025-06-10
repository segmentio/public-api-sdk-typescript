"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudiencePreviewAlphaInput = void 0;
var CreateAudiencePreviewAlphaInput = (function () {
    function CreateAudiencePreviewAlphaInput() {
    }
    CreateAudiencePreviewAlphaInput.getAttributeTypeMap = function () {
        return CreateAudiencePreviewAlphaInput.attributeTypeMap;
    };
    CreateAudiencePreviewAlphaInput.discriminator = undefined;
    CreateAudiencePreviewAlphaInput.attributeTypeMap = [
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CreateAudiencePreviewAlphaInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptionsWithLookback',
        },
    ];
    return CreateAudiencePreviewAlphaInput;
}());
exports.CreateAudiencePreviewAlphaInput = CreateAudiencePreviewAlphaInput;
(function (CreateAudiencePreviewAlphaInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CreateAudiencePreviewAlphaInput.AudienceTypeEnum || (CreateAudiencePreviewAlphaInput.AudienceTypeEnum = {}));
})(CreateAudiencePreviewAlphaInput = exports.CreateAudiencePreviewAlphaInput || (exports.CreateAudiencePreviewAlphaInput = {}));
exports.CreateAudiencePreviewAlphaInput = CreateAudiencePreviewAlphaInput;
//# sourceMappingURL=createAudiencePreviewAlphaInput.js.map