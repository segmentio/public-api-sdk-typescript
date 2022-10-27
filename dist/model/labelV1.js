"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelV1 = void 0;
var LabelV1 = (function () {
    function LabelV1() {
    }
    LabelV1.getAttributeTypeMap = function () {
        return LabelV1.attributeTypeMap;
    };
    LabelV1.discriminator = undefined;
    LabelV1.attributeTypeMap = [
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
    return LabelV1;
}());
exports.LabelV1 = LabelV1;
//# sourceMappingURL=labelV1.js.map