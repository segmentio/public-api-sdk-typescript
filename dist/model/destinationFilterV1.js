"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationFilterV1 = void 0;
var DestinationFilterV1 = (function () {
    function DestinationFilterV1() {
    }
    DestinationFilterV1.getAttributeTypeMap = function () {
        return DestinationFilterV1.attributeTypeMap;
    };
    DestinationFilterV1.discriminator = undefined;
    DestinationFilterV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'destinationId',
            baseName: 'destinationId',
            type: 'string',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'actions',
            baseName: 'actions',
            type: 'Array<DestinationFilterActionV1>',
        },
        {
            name: 'title',
            baseName: 'title',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];
    return DestinationFilterV1;
}());
exports.DestinationFilterV1 = DestinationFilterV1;
//# sourceMappingURL=destinationFilterV1.js.map