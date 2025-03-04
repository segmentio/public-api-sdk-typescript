"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitDestinationState = void 0;
var ExitDestinationState = (function () {
    function ExitDestinationState() {
    }
    ExitDestinationState.getAttributeTypeMap = function () {
        return ExitDestinationState.attributeTypeMap;
    };
    ExitDestinationState.discriminator = undefined;
    ExitDestinationState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ExitDestinationState.TypeEnum',
        },
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<Destination>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return ExitDestinationState;
}());
exports.ExitDestinationState = ExitDestinationState;
(function (ExitDestinationState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
    })(TypeEnum = ExitDestinationState.TypeEnum || (ExitDestinationState.TypeEnum = {}));
})(ExitDestinationState = exports.ExitDestinationState || (exports.ExitDestinationState = {}));
exports.ExitDestinationState = ExitDestinationState;
//# sourceMappingURL=exitDestinationState.js.map