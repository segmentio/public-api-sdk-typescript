"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewAnyOf = void 0;
var AudiencePreviewAnyOf = (function () {
    function AudiencePreviewAnyOf() {
    }
    AudiencePreviewAnyOf.getAttributeTypeMap = function () {
        return AudiencePreviewAnyOf.attributeTypeMap;
    };
    AudiencePreviewAnyOf.discriminator = undefined;
    AudiencePreviewAnyOf.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'AudiencePreviewAnyOf.StatusEnum',
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
            type: 'AudiencePreviewAnyOf.AudienceTypeEnum',
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
    return AudiencePreviewAnyOf;
}());
exports.AudiencePreviewAnyOf = AudiencePreviewAnyOf;
(function (AudiencePreviewAnyOf) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["COMPLETED"] = 'COMPLETED'] = "COMPLETED";
    })(StatusEnum = AudiencePreviewAnyOf.StatusEnum || (AudiencePreviewAnyOf.StatusEnum = {}));
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = AudiencePreviewAnyOf.AudienceTypeEnum || (AudiencePreviewAnyOf.AudienceTypeEnum = {}));
})(AudiencePreviewAnyOf = exports.AudiencePreviewAnyOf || (exports.AudiencePreviewAnyOf = {}));
exports.AudiencePreviewAnyOf = AudiencePreviewAnyOf;
//# sourceMappingURL=audiencePreviewAnyOf.js.map