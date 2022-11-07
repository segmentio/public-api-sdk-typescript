"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedLabelV1 = void 0;
var AllowedLabelV1 = (function () {
    function AllowedLabelV1() {
    }
    AllowedLabelV1.getAttributeTypeMap = function () {
        return AllowedLabelV1.attributeTypeMap;
    };
    AllowedLabelV1.discriminator = undefined;
    AllowedLabelV1.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'value',
            baseName: 'value',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];
    return AllowedLabelV1;
}());
exports.AllowedLabelV1 = AllowedLabelV1;
//# sourceMappingURL=allowedLabelV1.js.map