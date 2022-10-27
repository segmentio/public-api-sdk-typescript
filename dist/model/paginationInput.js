"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationInput = void 0;
var PaginationInput = (function () {
    function PaginationInput() {
    }
    PaginationInput.getAttributeTypeMap = function () {
        return PaginationInput.attributeTypeMap;
    };
    PaginationInput.discriminator = undefined;
    PaginationInput.attributeTypeMap = [
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
    return PaginationInput;
}());
exports.PaginationInput = PaginationInput;
//# sourceMappingURL=paginationInput.js.map