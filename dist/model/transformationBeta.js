"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationBeta = void 0;
var TransformationBeta = (function () {
    function TransformationBeta() {
    }
    TransformationBeta.getAttributeTypeMap = function () {
        return TransformationBeta.attributeTypeMap;
    };
    TransformationBeta.discriminator = undefined;
    TransformationBeta.attributeTypeMap = [
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
    return TransformationBeta;
}());
exports.TransformationBeta = TransformationBeta;
//# sourceMappingURL=transformationBeta.js.map