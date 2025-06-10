"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonAudiencePreview = void 0;
var CommonAudiencePreview = (function () {
    function CommonAudiencePreview() {
    }
    CommonAudiencePreview.getAttributeTypeMap = function () {
        return CommonAudiencePreview.attributeTypeMap;
    };
    CommonAudiencePreview.discriminator = undefined;
    CommonAudiencePreview.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CommonAudiencePreview.AudienceTypeEnum',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptionsWithLookback',
        },
    ];
    return CommonAudiencePreview;
}());
exports.CommonAudiencePreview = CommonAudiencePreview;
(function (CommonAudiencePreview) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CommonAudiencePreview.AudienceTypeEnum || (CommonAudiencePreview.AudienceTypeEnum = {}));
})(CommonAudiencePreview = exports.CommonAudiencePreview || (exports.CommonAudiencePreview = {}));
exports.CommonAudiencePreview = CommonAudiencePreview;
//# sourceMappingURL=commonAudiencePreview.js.map