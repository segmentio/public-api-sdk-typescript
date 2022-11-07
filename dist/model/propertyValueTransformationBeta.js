"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValueTransformationBeta = void 0;
var PropertyValueTransformationBeta = (function () {
    function PropertyValueTransformationBeta() {
    }
    PropertyValueTransformationBeta.getAttributeTypeMap = function () {
        return PropertyValueTransformationBeta.attributeTypeMap;
    };
    PropertyValueTransformationBeta.discriminator = undefined;
    PropertyValueTransformationBeta.attributeTypeMap = [
        {
            name: 'propertyPaths',
            baseName: 'propertyPaths',
            type: 'Array<string>',
        },
        {
            name: 'propertyValue',
            baseName: 'propertyValue',
            type: 'string',
        },
    ];
    return PropertyValueTransformationBeta;
}());
exports.PropertyValueTransformationBeta = PropertyValueTransformationBeta;
//# sourceMappingURL=propertyValueTransformationBeta.js.map