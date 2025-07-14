"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationInput = void 0;
var DestinationInput = (function () {
    function DestinationInput() {
    }
    DestinationInput.getAttributeTypeMap = function () {
        return DestinationInput.attributeTypeMap;
    };
    DestinationInput.discriminator = undefined;
    DestinationInput.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];
    return DestinationInput;
}());
exports.DestinationInput = DestinationInput;
//# sourceMappingURL=destinationInput.js.map