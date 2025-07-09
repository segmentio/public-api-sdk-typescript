"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreview = void 0;
var AudiencePreview = (function () {
    function AudiencePreview() {
    }
    AudiencePreview.getAttributeTypeMap = function () {
        return AudiencePreview.attributeTypeMap;
    };
    AudiencePreview.discriminator = undefined;
    AudiencePreview.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'AudiencePreview.AudienceTypeEnum',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'ReadAudiencePreviewOptions',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'AudiencePreview.StatusEnum',
        },
        {
            name: 'results',
            baseName: 'results',
            type: 'Array<AudiencePreviewResult>',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'AudienceSize',
        },
        {
            name: 'failureReason',
            baseName: 'failureReason',
            type: 'string',
        },
    ];
    return AudiencePreview;
}());
exports.AudiencePreview = AudiencePreview;
(function (AudiencePreview) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["LINKED"] = 'LINKED'] = "LINKED";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = AudiencePreview.AudienceTypeEnum || (AudiencePreview.AudienceTypeEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["COMPLETED"] = 'COMPLETED'] = "COMPLETED";
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
    })(StatusEnum = AudiencePreview.StatusEnum || (AudiencePreview.StatusEnum = {}));
})(AudiencePreview = exports.AudiencePreview || (exports.AudiencePreview = {}));
exports.AudiencePreview = AudiencePreview;
//# sourceMappingURL=audiencePreview.js.map