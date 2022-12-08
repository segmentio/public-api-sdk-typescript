"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformation4 = void 0;
var Transformation4 = (function () {
    function Transformation4() {
    }
    Transformation4.getAttributeTypeMap = function () {
        return Transformation4.attributeTypeMap;
    };
    Transformation4.discriminator = undefined;
    Transformation4.attributeTypeMap = [
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
            type: 'Array<PropertyRenameV1>',
        },
        {
            name: 'propertyValueTransformations',
            baseName: 'propertyValueTransformations',
            type: 'Array<PropertyValueTransformationV1>',
        },
    ];
    return Transformation4;
}());
exports.Transformation4 = Transformation4;
//# sourceMappingURL=transformation4.js.map