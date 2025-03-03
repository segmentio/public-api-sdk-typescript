"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertySelectionsConfig = void 0;
var PropertySelectionsConfig = (function () {
    function PropertySelectionsConfig() {
    }
    PropertySelectionsConfig.getAttributeTypeMap = function () {
        return PropertySelectionsConfig.attributeTypeMap;
    };
    PropertySelectionsConfig.discriminator = undefined;
    PropertySelectionsConfig.attributeTypeMap = [
        {
            name: 'profile',
            baseName: 'profile',
            type: 'Array<string>',
        },
    ];
    return PropertySelectionsConfig;
}());
exports.PropertySelectionsConfig = PropertySelectionsConfig;
//# sourceMappingURL=propertySelectionsConfig.js.map