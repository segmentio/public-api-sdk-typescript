"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectedDestinationsFromSourceV1Output = void 0;
var ListConnectedDestinationsFromSourceV1Output = (function () {
    function ListConnectedDestinationsFromSourceV1Output() {
    }
    ListConnectedDestinationsFromSourceV1Output.getAttributeTypeMap = function () {
        return ListConnectedDestinationsFromSourceV1Output.attributeTypeMap;
    };
    ListConnectedDestinationsFromSourceV1Output.discriminator = undefined;
    ListConnectedDestinationsFromSourceV1Output.attributeTypeMap = [
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<DestinationV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListConnectedDestinationsFromSourceV1Output;
}());
exports.ListConnectedDestinationsFromSourceV1Output = ListConnectedDestinationsFromSourceV1Output;
//# sourceMappingURL=listConnectedDestinationsFromSourceV1Output.js.map