"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransformationV1Input = void 0;
var UpdateTransformationV1Input = (function () {
    function UpdateTransformationV1Input() {
    }
    UpdateTransformationV1Input.getAttributeTypeMap = function () {
        return UpdateTransformationV1Input.attributeTypeMap;
    };
    UpdateTransformationV1Input.discriminator = undefined;
    UpdateTransformationV1Input.attributeTypeMap = [
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
    return UpdateTransformationV1Input;
}());
exports.UpdateTransformationV1Input = UpdateTransformationV1Input;
//# sourceMappingURL=updateTransformationV1Input.js.map