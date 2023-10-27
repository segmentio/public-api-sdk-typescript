"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFiltersFromDestinationV1Output = void 0;
var ListFiltersFromDestinationV1Output = (function () {
    function ListFiltersFromDestinationV1Output() {
    }
    ListFiltersFromDestinationV1Output.getAttributeTypeMap = function () {
        return ListFiltersFromDestinationV1Output.attributeTypeMap;
    };
    ListFiltersFromDestinationV1Output.discriminator = undefined;
    ListFiltersFromDestinationV1Output.attributeTypeMap = [
        {
            name: 'filters',
            baseName: 'filters',
            type: 'Array<DestinationFilterV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListFiltersFromDestinationV1Output;
}());
exports.ListFiltersFromDestinationV1Output = ListFiltersFromDestinationV1Output;
//# sourceMappingURL=listFiltersFromDestinationV1Output.js.map