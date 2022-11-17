"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransformationBetaInput = void 0;
var UpdateTransformationBetaInput = (function () {
    function UpdateTransformationBetaInput() {
    }
    UpdateTransformationBetaInput.getAttributeTypeMap = function () {
        return UpdateTransformationBetaInput.attributeTypeMap;
    };
    UpdateTransformationBetaInput.discriminator = undefined;
    UpdateTransformationBetaInput.attributeTypeMap = [
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
        {
            name: 'propertyValueTransformations',
            baseName: 'propertyValueTransformations',
            type: 'Array<PropertyValueTransformationBeta>',
        },
    ];
    return UpdateTransformationBetaInput;
}());
exports.UpdateTransformationBetaInput = UpdateTransformationBetaInput;
//# sourceMappingURL=updateTransformationBetaInput.js.map