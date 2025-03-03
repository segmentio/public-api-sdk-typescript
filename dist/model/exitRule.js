"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitRule = void 0;
var ExitRule = (function () {
    function ExitRule() {
    }
    ExitRule.getAttributeTypeMap = function () {
        return ExitRule.attributeTypeMap;
    };
    ExitRule.discriminator = undefined;
    ExitRule.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ExitRule.TypeEnum',
        },
        {
            name: 'exitType',
            baseName: 'exitType',
            type: 'ExitRule.ExitTypeEnum',
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
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<Transitions>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return ExitRule;
}());
exports.ExitRule = ExitRule;
(function (ExitRule) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = ExitRule.TypeEnum || (ExitRule.TypeEnum = {}));
    var ExitTypeEnum;
    (function (ExitTypeEnum) {
        ExitTypeEnum[ExitTypeEnum["AUDIENCE_MEMBERSHIP_CHANGE"] = 'AUDIENCE_MEMBERSHIP_CHANGE'] = "AUDIENCE_MEMBERSHIP_CHANGE";
        ExitTypeEnum[ExitTypeEnum["CONDITION_UNMATCH"] = 'CONDITION_UNMATCH'] = "CONDITION_UNMATCH";
        ExitTypeEnum[ExitTypeEnum["EVENT_PERFORMED"] = 'EVENT_PERFORMED'] = "EVENT_PERFORMED";
    })(ExitTypeEnum = ExitRule.ExitTypeEnum || (ExitRule.ExitTypeEnum = {}));
})(ExitRule = exports.ExitRule || (exports.ExitRule = {}));
exports.ExitRule = ExitRule;
//# sourceMappingURL=exitRule.js.map