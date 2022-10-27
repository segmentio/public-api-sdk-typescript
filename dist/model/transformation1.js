"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformation1 = void 0;
var Transformation1 = (function () {
    function Transformation1() {
    }
    Transformation1.getAttributeTypeMap = function () {
        return Transformation1.attributeTypeMap;
    };
    Transformation1.discriminator = undefined;
    Transformation1.attributeTypeMap = [
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
            name: 'destinationMetadataId',
            baseName: 'destinationMetadataId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'newEventName',
            baseName: 'newEventName',
            type: 'string',
        },
        {
            name: 'propertyRenames',
            baseName: 'propertyRenames',
            type: 'Array<PropertyRenameBeta>',
        },
    ];
    return Transformation1;
}());
exports.Transformation1 = Transformation1;
//# sourceMappingURL=transformation1.js.map