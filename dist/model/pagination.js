"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var Pagination = (function () {
    function Pagination() {
    }
    Pagination.getAttributeTypeMap = function () {
        return Pagination.attributeTypeMap;
    };
    Pagination.discriminator = undefined;
    Pagination.attributeTypeMap = [
        {
            name: 'current',
            baseName: 'current',
            type: 'string',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
        {
            name: 'previous',
            baseName: 'previous',
            type: 'string',
        },
        {
            name: 'totalEntries',
            baseName: 'totalEntries',
            type: 'number',
        },
    ];
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map