"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedAudiencePreview = void 0;
var FailedAudiencePreview = (function () {
    function FailedAudiencePreview() {
    }
    FailedAudiencePreview.getAttributeTypeMap = function () {
        return FailedAudiencePreview.attributeTypeMap;
    };
    FailedAudiencePreview.discriminator = undefined;
    FailedAudiencePreview.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'FailedAudiencePreview.StatusEnum',
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
            type: 'FailedAudiencePreview.AudienceTypeEnum',
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
    return FailedAudiencePreview;
}());
exports.FailedAudiencePreview = FailedAudiencePreview;
(function (FailedAudiencePreview) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
    })(StatusEnum = FailedAudiencePreview.StatusEnum || (FailedAudiencePreview.StatusEnum = {}));
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = FailedAudiencePreview.AudienceTypeEnum || (FailedAudiencePreview.AudienceTypeEnum = {}));
})(FailedAudiencePreview = exports.FailedAudiencePreview || (exports.FailedAudiencePreview = {}));
exports.FailedAudiencePreview = FailedAudiencePreview;
//# sourceMappingURL=failedAudiencePreview.js.map