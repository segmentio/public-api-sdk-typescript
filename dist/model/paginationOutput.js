"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationOutput = void 0;
var PaginationOutput = (function () {
    function PaginationOutput() {
    }
    PaginationOutput.getAttributeTypeMap = function () {
        return PaginationOutput.attributeTypeMap;
    };
    PaginationOutput.discriminator = undefined;
    PaginationOutput.attributeTypeMap = [
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
    return PaginationOutput;
}());
exports.PaginationOutput = PaginationOutput;
//# sourceMappingURL=paginationOutput.js.map