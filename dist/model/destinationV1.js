"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationV1 = void 0;
var DestinationV1 = (function () {
    function DestinationV1() {
    }
    DestinationV1.getAttributeTypeMap = function () {
        return DestinationV1.attributeTypeMap;
    };
    DestinationV1.discriminator = undefined;
    DestinationV1.attributeTypeMap = [
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
    return DestinationV1;
}());
exports.DestinationV1 = DestinationV1;
//# sourceMappingURL=destinationV1.js.map