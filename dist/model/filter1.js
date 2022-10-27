"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter1 = void 0;
var Filter1 = (function () {
    function Filter1() {
    }
    Filter1.getAttributeTypeMap = function () {
        return Filter1.attributeTypeMap;
    };
    Filter1.discriminator = undefined;
    Filter1.attributeTypeMap = [
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
    return Filter1;
}());
exports.Filter1 = Filter1;
//# sourceMappingURL=filter1.js.map