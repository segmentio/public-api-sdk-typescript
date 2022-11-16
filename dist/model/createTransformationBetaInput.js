"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransformationBetaInput = void 0;
var CreateTransformationBetaInput = (function () {
    function CreateTransformationBetaInput() {
    }
    CreateTransformationBetaInput.getAttributeTypeMap = function () {
        return CreateTransformationBetaInput.attributeTypeMap;
    };
    CreateTransformationBetaInput.discriminator = undefined;
    CreateTransformationBetaInput.attributeTypeMap = [
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
    return CreateTransformationBetaInput;
}());
exports.CreateTransformationBetaInput = CreateTransformationBetaInput;
//# sourceMappingURL=createTransformationBetaInput.js.map