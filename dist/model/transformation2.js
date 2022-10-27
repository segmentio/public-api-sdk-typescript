"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformation2 = void 0;
var Transformation2 = (function () {
    function Transformation2() {
    }
    Transformation2.getAttributeTypeMap = function () {
        return Transformation2.attributeTypeMap;
    };
    Transformation2.discriminator = undefined;
    Transformation2.attributeTypeMap = [
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
    return Transformation2;
}());
exports.Transformation2 = Transformation2;
//# sourceMappingURL=transformation2.js.map