"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionState = void 0;
var TransitionState = (function () {
    function TransitionState() {
    }
    TransitionState.getAttributeTypeMap = function () {
        return TransitionState.attributeTypeMap;
    };
    TransitionState.discriminator = undefined;
    TransitionState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TransitionState.TypeEnum',
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
    return TransitionState;
}());
exports.TransitionState = TransitionState;
(function (TransitionState) {
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
    })(TypeEnum = TransitionState.TypeEnum || (TransitionState.TypeEnum = {}));
})(TransitionState = exports.TransitionState || (exports.TransitionState = {}));
exports.TransitionState = TransitionState;
//# sourceMappingURL=transitionState.js.map