"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destination1 = void 0;
var Destination1 = (function () {
    function Destination1() {
    }
    Destination1.getAttributeTypeMap = function () {
        return Destination1.attributeTypeMap;
    };
    Destination1.discriminator = undefined;
    Destination1.attributeTypeMap = [
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
    return Destination1;
}());
exports.Destination1 = Destination1;
//# sourceMappingURL=destination1.js.map