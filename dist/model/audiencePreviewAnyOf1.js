"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewAnyOf1 = void 0;
var AudiencePreviewAnyOf1 = (function () {
    function AudiencePreviewAnyOf1() {
    }
    AudiencePreviewAnyOf1.getAttributeTypeMap = function () {
        return AudiencePreviewAnyOf1.attributeTypeMap;
    };
    AudiencePreviewAnyOf1.discriminator = undefined;
    AudiencePreviewAnyOf1.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'AudiencePreviewAnyOf1.StatusEnum',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'AudiencePreviewAnyOf1.AudienceTypeEnum',
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
    return AudiencePreviewAnyOf1;
}());
exports.AudiencePreviewAnyOf1 = AudiencePreviewAnyOf1;
(function (AudiencePreviewAnyOf1) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
    })(StatusEnum = AudiencePreviewAnyOf1.StatusEnum || (AudiencePreviewAnyOf1.StatusEnum = {}));
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = AudiencePreviewAnyOf1.AudienceTypeEnum || (AudiencePreviewAnyOf1.AudienceTypeEnum = {}));
})(AudiencePreviewAnyOf1 = exports.AudiencePreviewAnyOf1 || (exports.AudiencePreviewAnyOf1 = {}));
exports.AudiencePreviewAnyOf1 = AudiencePreviewAnyOf1;
//# sourceMappingURL=audiencePreviewAnyOf1.js.map