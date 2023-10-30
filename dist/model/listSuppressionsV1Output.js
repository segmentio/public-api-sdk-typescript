"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSuppressionsV1Output = void 0;
var ListSuppressionsV1Output = (function () {
    function ListSuppressionsV1Output() {
    }
    ListSuppressionsV1Output.getAttributeTypeMap = function () {
        return ListSuppressionsV1Output.attributeTypeMap;
    };
    ListSuppressionsV1Output.discriminator = undefined;
    ListSuppressionsV1Output.attributeTypeMap = [
        {
            name: 'suppressed',
            baseName: 'suppressed',
            type: 'Array<SuppressedInner>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListSuppressionsV1Output;
}());
exports.ListSuppressionsV1Output = ListSuppressionsV1Output;
//# sourceMappingURL=listSuppressionsV1Output.js.map