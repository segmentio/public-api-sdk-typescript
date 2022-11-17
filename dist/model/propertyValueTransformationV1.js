"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValueTransformationV1 = void 0;
var PropertyValueTransformationV1 = (function () {
    function PropertyValueTransformationV1() {
    }
    PropertyValueTransformationV1.getAttributeTypeMap = function () {
        return PropertyValueTransformationV1.attributeTypeMap;
    };
    PropertyValueTransformationV1.discriminator = undefined;
    PropertyValueTransformationV1.attributeTypeMap = [
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
    return PropertyValueTransformationV1;
}());
exports.PropertyValueTransformationV1 = PropertyValueTransformationV1;
//# sourceMappingURL=propertyValueTransformationV1.js.map