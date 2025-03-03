"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationState = void 0;
var DestinationState = (function () {
    function DestinationState() {
    }
    DestinationState.getAttributeTypeMap = function () {
        return DestinationState.attributeTypeMap;
    };
    DestinationState.discriminator = undefined;
    DestinationState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationState.TypeEnum',
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
    ];
    return DestinationState;
}());
exports.DestinationState = DestinationState;
(function (DestinationState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
    })(TypeEnum = DestinationState.TypeEnum || (DestinationState.TypeEnum = {}));
})(DestinationState = exports.DestinationState || (exports.DestinationState = {}));
exports.DestinationState = DestinationState;
//# sourceMappingURL=destinationState.js.map