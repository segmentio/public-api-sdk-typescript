"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamStatusV1 = void 0;
var StreamStatusV1 = (function () {
    function StreamStatusV1() {
    }
    StreamStatusV1.getAttributeTypeMap = function () {
        return StreamStatusV1.attributeTypeMap;
    };
    StreamStatusV1.discriminator = undefined;
    StreamStatusV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'destinationStatus',
            baseName: 'destinationStatus',
            type: 'Array<DestinationStatusV1>',
        },
    ];
    return StreamStatusV1;
}());
exports.StreamStatusV1 = StreamStatusV1;
//# sourceMappingURL=streamStatusV1.js.map