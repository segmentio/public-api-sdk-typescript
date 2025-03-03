"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntryState = void 0;
var EventEntryState = (function () {
    function EventEntryState() {
    }
    EventEntryState.getAttributeTypeMap = function () {
        return EventEntryState.attributeTypeMap;
    };
    EventEntryState.discriminator = undefined;
    EventEntryState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'EventEntryState.TypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
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
    return EventEntryState;
}());
exports.EventEntryState = EventEntryState;
(function (EventEntryState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EVENT_ENTRY"] = 'EVENT_ENTRY'] = "EVENT_ENTRY";
        TypeEnum[TypeEnum["AUDIENCE_ENTRY"] = 'AUDIENCE_ENTRY'] = "AUDIENCE_ENTRY";
        TypeEnum[TypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        TypeEnum[TypeEnum["SIMPLE_DELAY"] = 'SIMPLE_DELAY'] = "SIMPLE_DELAY";
        TypeEnum[TypeEnum["EVENT_SPLIT"] = 'EVENT_SPLIT'] = "EVENT_SPLIT";
        TypeEnum[TypeEnum["CONDITION_SPLIT"] = 'CONDITION_SPLIT'] = "CONDITION_SPLIT";
        TypeEnum[TypeEnum["RANDOM_SPLIT"] = 'RANDOM_SPLIT'] = "RANDOM_SPLIT";
        TypeEnum[TypeEnum["EXIT"] = 'EXIT'] = "EXIT";
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = EventEntryState.TypeEnum || (EventEntryState.TypeEnum = {}));
})(EventEntryState = exports.EventEntryState || (exports.EventEntryState = {}));
exports.EventEntryState = EventEntryState;
//# sourceMappingURL=eventEntryState.js.map