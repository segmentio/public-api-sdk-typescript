"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewAnyOf2 = void 0;
var AudiencePreviewAnyOf2 = (function () {
    function AudiencePreviewAnyOf2() {
    }
    AudiencePreviewAnyOf2.getAttributeTypeMap = function () {
        return AudiencePreviewAnyOf2.attributeTypeMap;
    };
    AudiencePreviewAnyOf2.discriminator = undefined;
    AudiencePreviewAnyOf2.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'AudiencePreviewAnyOf2.StatusEnum',
        },
        {
            name: 'failureReason',
            baseName: 'failureReason',
            type: 'string',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'AudiencePreviewAnyOf2.AudienceTypeEnum',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudiencePreviewOptions',
        },
    ];
    return AudiencePreviewAnyOf2;
}());
exports.AudiencePreviewAnyOf2 = AudiencePreviewAnyOf2;
(function (AudiencePreviewAnyOf2) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
    })(StatusEnum = AudiencePreviewAnyOf2.StatusEnum || (AudiencePreviewAnyOf2.StatusEnum = {}));
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = AudiencePreviewAnyOf2.AudienceTypeEnum || (AudiencePreviewAnyOf2.AudienceTypeEnum = {}));
})(AudiencePreviewAnyOf2 = exports.AudiencePreviewAnyOf2 || (exports.AudiencePreviewAnyOf2 = {}));
exports.AudiencePreviewAnyOf2 = AudiencePreviewAnyOf2;
//# sourceMappingURL=audiencePreviewAnyOf2.js.map