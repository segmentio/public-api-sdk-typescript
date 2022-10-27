"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppressedInner = void 0;
var SuppressedInner = (function () {
    function SuppressedInner() {
    }
    SuppressedInner.getAttributeTypeMap = function () {
        return SuppressedInner.attributeTypeMap;
    };
    SuppressedInner.discriminator = undefined;
    SuppressedInner.attributeTypeMap = [
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'string',
        },
        {
            name: 'subjectIds',
            baseName: 'subjectIds',
            type: 'Array<string>',
        },
    ];
    return SuppressedInner;
}());
exports.SuppressedInner = SuppressedInner;
//# sourceMappingURL=suppressedInner.js.map