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
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'Metadata',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return Destination;
}());
exports.Destination = Destination;
//# sourceMappingURL=destination.js.map