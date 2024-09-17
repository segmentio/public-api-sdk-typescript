"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFiltersForSpaceOutput = void 0;
var ListFiltersForSpaceOutput = (function () {
    function ListFiltersForSpaceOutput() {
    }
    ListFiltersForSpaceOutput.getAttributeTypeMap = function () {
        return ListFiltersForSpaceOutput.attributeTypeMap;
    };
    ListFiltersForSpaceOutput.discriminator = undefined;
    ListFiltersForSpaceOutput.attributeTypeMap = [
        {
            name: 'filters',
            baseName: 'filters',
            type: 'Array<Filter>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'ListFiltersPaginationOutput',
        },
    ];
    return ListFiltersForSpaceOutput;
}());
exports.ListFiltersForSpaceOutput = ListFiltersForSpaceOutput;
//# sourceMappingURL=listFiltersForSpaceOutput.js.map