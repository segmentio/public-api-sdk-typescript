"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesInner = void 0;
var RulesInner = (function () {
    function RulesInner() {
    }
    RulesInner.getAttributeTypeMap = function () {
        return RulesInner.attributeTypeMap;
    };
    RulesInner.discriminator = undefined;
    RulesInner.attributeTypeMap = [
        {
            name: 'exitType',
            baseName: 'exitType',
            type: 'RulesInner.ExitTypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'RulesInner.TypeEnum',
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
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
    ];
    return RulesInner;
}());
exports.RulesInner = RulesInner;
(function (RulesInner) {
    var ExitTypeEnum;
    (function (ExitTypeEnum) {
        ExitTypeEnum[ExitTypeEnum["AUDIENCE_MEMBERSHIP_CHANGE"] = 'AUDIENCE_MEMBERSHIP_CHANGE'] = "AUDIENCE_MEMBERSHIP_CHANGE";
    })(ExitTypeEnum = RulesInner.ExitTypeEnum || (RulesInner.ExitTypeEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = RulesInner.TypeEnum || (RulesInner.TypeEnum = {}));
})(RulesInner = exports.RulesInner || (exports.RulesInner = {}));
exports.RulesInner = RulesInner;
//# sourceMappingURL=rulesInner.js.map