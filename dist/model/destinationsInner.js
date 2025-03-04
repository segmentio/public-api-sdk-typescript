"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsInner = void 0;
var DestinationsInner = (function () {
    function DestinationsInner() {
    }
    DestinationsInner.getAttributeTypeMap = function () {
        return DestinationsInner.attributeTypeMap;
    };
    DestinationsInner.discriminator = undefined;
    DestinationsInner.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationsInner.TypeEnum',
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
    return DestinationsInner;
}());
exports.DestinationsInner = DestinationsInner;
(function (DestinationsInner) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
    })(TypeEnum = DestinationsInner.TypeEnum || (DestinationsInner.TypeEnum = {}));
})(DestinationsInner = exports.DestinationsInner || (exports.DestinationsInner = {}));
exports.DestinationsInner = DestinationsInner;
//# sourceMappingURL=destinationsInner.js.map