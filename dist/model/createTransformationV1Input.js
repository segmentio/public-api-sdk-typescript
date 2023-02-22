"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransformationV1Input = void 0;
var CreateTransformationV1Input = (function () {
    function CreateTransformationV1Input() {
    }
    CreateTransformationV1Input.getAttributeTypeMap = function () {
        return CreateTransformationV1Input.attributeTypeMap;
    };
    CreateTransformationV1Input.discriminator = undefined;
    CreateTransformationV1Input.attributeTypeMap = [
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
    return CreateTransformationV1Input;
}());
exports.CreateTransformationV1Input = CreateTransformationV1Input;
//# sourceMappingURL=createTransformationV1Input.js.map