"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitState = void 0;
var ExitState = (function () {
    function ExitState() {
    }
    ExitState.getAttributeTypeMap = function () {
        return ExitState.attributeTypeMap;
    };
    ExitState.discriminator = undefined;
    ExitState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ExitState.TypeEnum',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return ExitState;
}());
exports.ExitState = ExitState;
(function (ExitState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EXIT"] = 'EXIT'] = "EXIT";
    })(TypeEnum = ExitState.TypeEnum || (ExitState.TypeEnum = {}));
})(ExitState = exports.ExitState || (exports.ExitState = {}));
exports.ExitState = ExitState;
//# sourceMappingURL=exitState.js.map