"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata1 = void 0;
var Metadata1 = (function () {
    function Metadata1() {
    }
    Metadata1.getAttributeTypeMap = function () {
        return Metadata1.attributeTypeMap;
    };
    Metadata1.discriminator = undefined;
    Metadata1.attributeTypeMap = [
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
            type: 'Logos1',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
        {
            name: 'categories',
            baseName: 'categories',
            type: 'Array<string>',
        },
        {
            name: 'isCloudEventSource',
            baseName: 'isCloudEventSource',
            type: 'boolean',
        },
    ];
    return Metadata1;
}());
exports.Metadata1 = Metadata1;
//# sourceMappingURL=metadata1.js.map