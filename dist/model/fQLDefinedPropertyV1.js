"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FQLDefinedPropertyV1 = void 0;
var FQLDefinedPropertyV1 = (function () {
    function FQLDefinedPropertyV1() {
    }
    FQLDefinedPropertyV1.getAttributeTypeMap = function () {
        return FQLDefinedPropertyV1.attributeTypeMap;
    };
    FQLDefinedPropertyV1.discriminator = undefined;
    FQLDefinedPropertyV1.attributeTypeMap = [
        {
            name: 'fql',
            baseName: 'fql',
            type: 'string',
        },
        {
            name: 'propertyName',
            baseName: 'propertyName',
            type: 'string',
        },
    ];
    return FQLDefinedPropertyV1;
}());
exports.FQLDefinedPropertyV1 = FQLDefinedPropertyV1;
//# sourceMappingURL=fQLDefinedPropertyV1.js.map