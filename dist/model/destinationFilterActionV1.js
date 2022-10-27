"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationFilterActionV1 = void 0;
var DestinationFilterActionV1 = (function () {
    function DestinationFilterActionV1() {
    }
    DestinationFilterActionV1.getAttributeTypeMap = function () {
        return DestinationFilterActionV1.attributeTypeMap;
    };
    DestinationFilterActionV1.discriminator = undefined;
    DestinationFilterActionV1.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationFilterActionV1.TypeEnum',
        },
        {
            name: 'fields',
            baseName: 'fields',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'percent',
            baseName: 'percent',
            type: 'number',
        },
        {
            name: 'path',
            baseName: 'path',
            type: 'string',
        },
    ];
    return DestinationFilterActionV1;
}());
exports.DestinationFilterActionV1 = DestinationFilterActionV1;
(function (DestinationFilterActionV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ALLOW_PROPERTIES"] = 'ALLOW_PROPERTIES'] = "ALLOW_PROPERTIES";
        TypeEnum[TypeEnum["DROP"] = 'DROP'] = "DROP";
        TypeEnum[TypeEnum["DROP_PROPERTIES"] = 'DROP_PROPERTIES'] = "DROP_PROPERTIES";
        TypeEnum[TypeEnum["SAMPLE"] = 'SAMPLE'] = "SAMPLE";
    })(TypeEnum = DestinationFilterActionV1.TypeEnum || (DestinationFilterActionV1.TypeEnum = {}));
})(DestinationFilterActionV1 = exports.DestinationFilterActionV1 || (exports.DestinationFilterActionV1 = {}));
exports.DestinationFilterActionV1 = DestinationFilterActionV1;
//# sourceMappingURL=destinationFilterActionV1.js.map