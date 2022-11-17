"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination1 = void 0;
var Pagination1 = (function () {
    function Pagination1() {
    }
    Pagination1.getAttributeTypeMap = function () {
        return Pagination1.attributeTypeMap;
    };
    Pagination1.discriminator = undefined;
    Pagination1.attributeTypeMap = [
        {
            name: 'cursor',
            baseName: 'cursor',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
    ];
    return Pagination1;
}());
exports.Pagination1 = Pagination1;
//# sourceMappingURL=pagination1.js.map