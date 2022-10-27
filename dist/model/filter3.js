"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter3 = void 0;
var Filter3 = (function () {
    function Filter3() {
    }
    Filter3.getAttributeTypeMap = function () {
        return Filter3.attributeTypeMap;
    };
    Filter3.discriminator = undefined;
    Filter3.attributeTypeMap = [
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
    return Filter3;
}());
exports.Filter3 = Filter3;
//# sourceMappingURL=filter3.js.map