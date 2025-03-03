"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesInner = void 0;
var StatesInner = (function () {
    function StatesInner() {
    }
    StatesInner.getAttributeTypeMap = function () {
        return StatesInner.attributeTypeMap;
    };
    StatesInner.discriminator = undefined;
    StatesInner.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'StatesInner.TypeEnum',
        },
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<Destination>',
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
            name: 'exitType',
            baseName: 'exitType',
            type: 'StatesInner.ExitTypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
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
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
    ];
    return StatesInner;
}());
exports.StatesInner = StatesInner;
(function (StatesInner) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = StatesInner.TypeEnum || (StatesInner.TypeEnum = {}));
    var ExitTypeEnum;
    (function (ExitTypeEnum) {
        ExitTypeEnum[ExitTypeEnum["AUDIENCE_MEMBERSHIP_CHANGE"] = 'AUDIENCE_MEMBERSHIP_CHANGE'] = "AUDIENCE_MEMBERSHIP_CHANGE";
    })(ExitTypeEnum = StatesInner.ExitTypeEnum || (StatesInner.ExitTypeEnum = {}));
})(StatesInner = exports.StatesInner || (exports.StatesInner = {}));
exports.StatesInner = StatesInner;
//# sourceMappingURL=statesInner.js.map