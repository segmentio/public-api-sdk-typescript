"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewAudienceInput = void 0;
var PreviewAudienceInput = (function () {
    function PreviewAudienceInput() {
    }
    PreviewAudienceInput.getAttributeTypeMap = function () {
        return PreviewAudienceInput.attributeTypeMap;
    };
    PreviewAudienceInput.discriminator = undefined;
    PreviewAudienceInput.attributeTypeMap = [
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'PreviewAudienceInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptionsWithLookback',
        },
    ];
    return PreviewAudienceInput;
}());
exports.PreviewAudienceInput = PreviewAudienceInput;
(function (PreviewAudienceInput) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = PreviewAudienceInput.AudienceTypeEnum || (PreviewAudienceInput.AudienceTypeEnum = {}));
})(PreviewAudienceInput = exports.PreviewAudienceInput || (exports.PreviewAudienceInput = {}));
exports.PreviewAudienceInput = PreviewAudienceInput;
//# sourceMappingURL=previewAudienceInput.js.map