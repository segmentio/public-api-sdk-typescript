"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedAudiencePreview = void 0;
var CompletedAudiencePreview = (function () {
    function CompletedAudiencePreview() {
    }
    CompletedAudiencePreview.getAttributeTypeMap = function () {
        return CompletedAudiencePreview.attributeTypeMap;
    };
    CompletedAudiencePreview.discriminator = undefined;
    CompletedAudiencePreview.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'CompletedAudiencePreview.StatusEnum',
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
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CompletedAudiencePreview.AudienceTypeEnum',
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
    return CompletedAudiencePreview;
}());
exports.CompletedAudiencePreview = CompletedAudiencePreview;
(function (CompletedAudiencePreview) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["COMPLETED"] = 'COMPLETED'] = "COMPLETED";
    })(StatusEnum = CompletedAudiencePreview.StatusEnum || (CompletedAudiencePreview.StatusEnum = {}));
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = CompletedAudiencePreview.AudienceTypeEnum || (CompletedAudiencePreview.AudienceTypeEnum = {}));
})(CompletedAudiencePreview = exports.CompletedAudiencePreview || (exports.CompletedAudiencePreview = {}));
exports.CompletedAudiencePreview = CompletedAudiencePreview;
//# sourceMappingURL=completedAudiencePreview.js.map