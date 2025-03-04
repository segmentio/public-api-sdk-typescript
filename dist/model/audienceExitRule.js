"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceExitRule = void 0;
var AudienceExitRule = (function () {
    function AudienceExitRule() {
    }
    AudienceExitRule.getAttributeTypeMap = function () {
        return AudienceExitRule.attributeTypeMap;
    };
    AudienceExitRule.discriminator = undefined;
    AudienceExitRule.attributeTypeMap = [
        {
            name: 'exitType',
            baseName: 'exitType',
            type: 'AudienceExitRule.ExitTypeEnum',
        },
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceExitRule.TypeEnum',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'concurrencyEnabled',
            baseName: 'concurrencyEnabled',
            type: 'boolean',
        },
        {
            name: 'connectedDestinations',
            baseName: 'connectedDestinations',
            type: 'Array<string>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return AudienceExitRule;
}());
exports.AudienceExitRule = AudienceExitRule;
(function (AudienceExitRule) {
    var ExitTypeEnum;
    (function (ExitTypeEnum) {
        ExitTypeEnum[ExitTypeEnum["AUDIENCE_MEMBERSHIP_CHANGE"] = 'AUDIENCE_MEMBERSHIP_CHANGE'] = "AUDIENCE_MEMBERSHIP_CHANGE";
    })(ExitTypeEnum = AudienceExitRule.ExitTypeEnum || (AudienceExitRule.ExitTypeEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = AudienceExitRule.TypeEnum || (AudienceExitRule.TypeEnum = {}));
})(AudienceExitRule = exports.AudienceExitRule || (exports.AudienceExitRule = {}));
exports.AudienceExitRule = AudienceExitRule;
//# sourceMappingURL=audienceExitRule.js.map