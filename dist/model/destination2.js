"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destination2 = void 0;
var Destination2 = (function () {
    function Destination2() {
    }
    Destination2.getAttributeTypeMap = function () {
        return Destination2.attributeTypeMap;
    };
    Destination2.discriminator = undefined;
    Destination2.attributeTypeMap = [
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
    return Destination2;
}());
exports.Destination2 = Destination2;
//# sourceMappingURL=destination2.js.map