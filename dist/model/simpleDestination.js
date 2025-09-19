"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDestination = void 0;
var SimpleDestination = (function () {
    function SimpleDestination() {
    }
    SimpleDestination.getAttributeTypeMap = function () {
        return SimpleDestination.attributeTypeMap;
    };
    SimpleDestination.discriminator = undefined;
    SimpleDestination.attributeTypeMap = [
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
            name: 'sourceId',
            baseName: 'sourceId',
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
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'destinationId',
            baseName: 'destinationId',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'Metadata',
        },
        {
            name: 'idSync',
            baseName: 'idSync',
            type: 'IDSyncOptions',
        },
    ];
    return SimpleDestination;
}());
exports.SimpleDestination = SimpleDestination;
//# sourceMappingURL=simpleDestination.js.map