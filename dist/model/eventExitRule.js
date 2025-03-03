"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventExitRule = void 0;
var EventExitRule = (function () {
    function EventExitRule() {
    }
    EventExitRule.getAttributeTypeMap = function () {
        return EventExitRule.attributeTypeMap;
    };
    EventExitRule.discriminator = undefined;
    EventExitRule.attributeTypeMap = [
        {
            name: 'exitType',
            baseName: 'exitType',
            type: 'EventExitRule.ExitTypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'EventExitRule.TypeEnum',
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
    return EventExitRule;
}());
exports.EventExitRule = EventExitRule;
(function (EventExitRule) {
    var ExitTypeEnum;
    (function (ExitTypeEnum) {
        ExitTypeEnum[ExitTypeEnum["EVENT_PERFORMED"] = 'EVENT_PERFORMED'] = "EVENT_PERFORMED";
    })(ExitTypeEnum = EventExitRule.ExitTypeEnum || (EventExitRule.ExitTypeEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = EventExitRule.TypeEnum || (EventExitRule.TypeEnum = {}));
})(EventExitRule = exports.EventExitRule || (exports.EventExitRule = {}));
exports.EventExitRule = EventExitRule;
//# sourceMappingURL=eventExitRule.js.map