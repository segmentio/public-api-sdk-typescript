"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformation = void 0;
var Transformation = (function () {
    function Transformation() {
    }
    Transformation.getAttributeTypeMap = function () {
        return Transformation.attributeTypeMap;
    };
    Transformation.discriminator = undefined;
    Transformation.attributeTypeMap = [
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
    return Transformation;
}());
exports.Transformation = Transformation;
//# sourceMappingURL=transformation.js.map