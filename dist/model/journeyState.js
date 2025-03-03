"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyState = void 0;
var JourneyState = (function () {
    function JourneyState() {
    }
    JourneyState.getAttributeTypeMap = function () {
        return JourneyState.attributeTypeMap;
    };
    JourneyState.discriminator = undefined;
    JourneyState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'JourneyState.TypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<RandomSplitBranch>',
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
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<Destination>',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'string',
        },
    ];
    return JourneyState;
}());
exports.JourneyState = JourneyState;
(function (JourneyState) {
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
    })(TypeEnum = JourneyState.TypeEnum || (JourneyState.TypeEnum = {}));
})(JourneyState = exports.JourneyState || (exports.JourneyState = {}));
exports.JourneyState = JourneyState;
//# sourceMappingURL=journeyState.js.map