"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var Filter = (function () {
    function Filter() {
    }
    Filter.getAttributeTypeMap = function () {
        return Filter.attributeTypeMap;
    };
    Filter.discriminator = undefined;
    Filter.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'integrationId',
            baseName: 'integrationId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'drop',
            baseName: 'drop',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'productArea',
            baseName: 'productArea',
            type: 'string',
        },
        {
            name: 'propertyDrops',
            baseName: 'propertyDrops',
            type: 'Array<string>',
        },
        {
            name: 'allowProperties',
            baseName: 'allowProperties',
            type: 'Array<string>',
        },
    ];
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map