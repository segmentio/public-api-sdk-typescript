"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectedDestinationsFromSourceAlphaOutput = void 0;
var ListConnectedDestinationsFromSourceAlphaOutput = (function () {
    function ListConnectedDestinationsFromSourceAlphaOutput() {
    }
    ListConnectedDestinationsFromSourceAlphaOutput.getAttributeTypeMap = function () {
        return ListConnectedDestinationsFromSourceAlphaOutput.attributeTypeMap;
    };
    ListConnectedDestinationsFromSourceAlphaOutput.discriminator = undefined;
    ListConnectedDestinationsFromSourceAlphaOutput.attributeTypeMap = [
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
    return ListConnectedDestinationsFromSourceAlphaOutput;
}());
exports.ListConnectedDestinationsFromSourceAlphaOutput = ListConnectedDestinationsFromSourceAlphaOutput;
//# sourceMappingURL=listConnectedDestinationsFromSourceAlphaOutput.js.map