"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelAlpha = void 0;
var LabelAlpha = (function () {
    function LabelAlpha() {
    }
    LabelAlpha.getAttributeTypeMap = function () {
        return LabelAlpha.attributeTypeMap;
    };
    LabelAlpha.discriminator = undefined;
    LabelAlpha.attributeTypeMap = [
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
    return LabelAlpha;
}());
exports.LabelAlpha = LabelAlpha;
//# sourceMappingURL=labelAlpha.js.map