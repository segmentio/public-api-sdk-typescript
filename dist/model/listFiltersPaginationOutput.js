"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFiltersPaginationOutput = void 0;
var ListFiltersPaginationOutput = (function () {
    function ListFiltersPaginationOutput() {
    }
    ListFiltersPaginationOutput.getAttributeTypeMap = function () {
        return ListFiltersPaginationOutput.attributeTypeMap;
    };
    ListFiltersPaginationOutput.discriminator = undefined;
    ListFiltersPaginationOutput.attributeTypeMap = [
        {
            name: 'current',
            baseName: 'current',
            type: 'number',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'number',
        },
        {
            name: 'totalEntries',
            baseName: 'totalEntries',
            type: 'number',
        },
    ];
    return ListFiltersPaginationOutput;
}());
exports.ListFiltersPaginationOutput = ListFiltersPaginationOutput;
//# sourceMappingURL=listFiltersPaginationOutput.js.map