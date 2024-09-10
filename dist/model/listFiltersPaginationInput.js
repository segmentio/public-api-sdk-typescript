"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFiltersPaginationInput = void 0;
var ListFiltersPaginationInput = (function () {
    function ListFiltersPaginationInput() {
    }
    ListFiltersPaginationInput.getAttributeTypeMap = function () {
        return ListFiltersPaginationInput.attributeTypeMap;
    };
    ListFiltersPaginationInput.discriminator = undefined;
    ListFiltersPaginationInput.attributeTypeMap = [
        {
            name: 'cursor',
            baseName: 'cursor',
            type: 'number',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
    ];
    return ListFiltersPaginationInput;
}());
exports.ListFiltersPaginationInput = ListFiltersPaginationInput;
//# sourceMappingURL=listFiltersPaginationInput.js.map