"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destination = void 0;
var Destination = (function () {
    function Destination() {
    }
    Destination.getAttributeTypeMap = function () {
        return Destination.attributeTypeMap;
    };
    Destination.discriminator = undefined;
    Destination.attributeTypeMap = [
        {
            name: 'destinationId',
            baseName: 'destinationId',
            type: 'string',
        },
        {
            name: 'activations',
            baseName: 'activations',
            type: 'Array<Activation>',
        },
    ];
    return Destination;
}());
exports.Destination = Destination;
//# sourceMappingURL=destination.js.map