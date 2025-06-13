"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunningAudiencePreview = void 0;
var RunningAudiencePreview = (function () {
    function RunningAudiencePreview() {
    }
    RunningAudiencePreview.getAttributeTypeMap = function () {
        return RunningAudiencePreview.attributeTypeMap;
    };
    RunningAudiencePreview.discriminator = undefined;
    RunningAudiencePreview.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RunningAudiencePreview.StatusEnum',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'RunningAudiencePreview.AudienceTypeEnum',
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
    return RunningAudiencePreview;
}());
exports.RunningAudiencePreview = RunningAudiencePreview;
(function (RunningAudiencePreview) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
    })(StatusEnum = RunningAudiencePreview.StatusEnum || (RunningAudiencePreview.StatusEnum = {}));
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = RunningAudiencePreview.AudienceTypeEnum || (RunningAudiencePreview.AudienceTypeEnum = {}));
})(RunningAudiencePreview = exports.RunningAudiencePreview || (exports.RunningAudiencePreview = {}));
exports.RunningAudiencePreview = RunningAudiencePreview;
//# sourceMappingURL=runningAudiencePreview.js.map