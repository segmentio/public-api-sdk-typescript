"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationV1 = void 0;
var TransformationV1 = (function () {
    function TransformationV1() {
    }
    TransformationV1.getAttributeTypeMap = function () {
        return TransformationV1.attributeTypeMap;
    };
    TransformationV1.discriminator = undefined;
    TransformationV1.attributeTypeMap = [
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
        {
            name: 'fqlDefinedProperties',
            baseName: 'fqlDefinedProperties',
            type: 'Array<FQLDefinedPropertyV1>',
        },
    ];
    return TransformationV1;
}());
exports.TransformationV1 = TransformationV1;
//# sourceMappingURL=transformationV1.js.map