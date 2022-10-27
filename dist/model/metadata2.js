"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata2 = void 0;
var Metadata2 = (function () {
    function Metadata2() {
    }
    Metadata2.getAttributeTypeMap = function () {
        return Metadata2.attributeTypeMap;
    };
    Metadata2.discriminator = undefined;
    Metadata2.attributeTypeMap = [
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
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logos',
            baseName: 'logos',
            type: 'Logos2',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
    ];
    return Metadata2;
}());
exports.Metadata2 = Metadata2;
//# sourceMappingURL=metadata2.js.map