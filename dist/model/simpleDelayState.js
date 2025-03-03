"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDelayState = void 0;
var SimpleDelayState = (function () {
    function SimpleDelayState() {
    }
    SimpleDelayState.getAttributeTypeMap = function () {
        return SimpleDelayState.attributeTypeMap;
    };
    SimpleDelayState.discriminator = undefined;
    SimpleDelayState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'SimpleDelayState.TypeEnum',
        },
        {
            name: 'duration',
            baseName: 'duration',
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
    return SimpleDelayState;
}());
exports.SimpleDelayState = SimpleDelayState;
(function (SimpleDelayState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["SIMPLE_DELAY"] = 'SIMPLE_DELAY'] = "SIMPLE_DELAY";
    })(TypeEnum = SimpleDelayState.TypeEnum || (SimpleDelayState.TypeEnum = {}));
})(SimpleDelayState = exports.SimpleDelayState || (exports.SimpleDelayState = {}));
exports.SimpleDelayState = SimpleDelayState;
//# sourceMappingURL=simpleDelayState.js.map