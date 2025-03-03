"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseState = void 0;
var BaseState = (function () {
    function BaseState() {
    }
    BaseState.getAttributeTypeMap = function () {
        return BaseState.attributeTypeMap;
    };
    BaseState.discriminator = undefined;
    BaseState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'BaseState.TypeEnum',
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
        {
            name: 'exitType',
            baseName: 'exitType',
            type: 'BaseState.ExitTypeEnum',
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
    ];
    return BaseState;
}());
exports.BaseState = BaseState;
(function (BaseState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["RANDOM_SPLIT"] = 'RANDOM_SPLIT'] = "RANDOM_SPLIT";
        TypeEnum[TypeEnum["EXIT"] = 'EXIT'] = "EXIT";
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = BaseState.TypeEnum || (BaseState.TypeEnum = {}));
    var ExitTypeEnum;
    (function (ExitTypeEnum) {
        ExitTypeEnum[ExitTypeEnum["AUDIENCE_MEMBERSHIP_CHANGE"] = 'AUDIENCE_MEMBERSHIP_CHANGE'] = "AUDIENCE_MEMBERSHIP_CHANGE";
        ExitTypeEnum[ExitTypeEnum["CONDITION_UNMATCH"] = 'CONDITION_UNMATCH'] = "CONDITION_UNMATCH";
        ExitTypeEnum[ExitTypeEnum["EVENT_PERFORMED"] = 'EVENT_PERFORMED'] = "EVENT_PERFORMED";
    })(ExitTypeEnum = BaseState.ExitTypeEnum || (BaseState.ExitTypeEnum = {}));
})(BaseState = exports.BaseState || (exports.BaseState = {}));
exports.BaseState = BaseState;
//# sourceMappingURL=baseState.js.map