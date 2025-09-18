"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDestinationsFromAudienceAlphaOutput = void 0;
var ListDestinationsFromAudienceAlphaOutput = (function () {
    function ListDestinationsFromAudienceAlphaOutput() {
    }
    ListDestinationsFromAudienceAlphaOutput.getAttributeTypeMap = function () {
        return ListDestinationsFromAudienceAlphaOutput.attributeTypeMap;
    };
    ListDestinationsFromAudienceAlphaOutput.discriminator = undefined;
    ListDestinationsFromAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'connections',
            baseName: 'connections',
            type: 'Array<SimpleDestination>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListDestinationsFromAudienceAlphaOutput;
}());
exports.ListDestinationsFromAudienceAlphaOutput = ListDestinationsFromAudienceAlphaOutput;
//# sourceMappingURL=listDestinationsFromAudienceAlphaOutput.js.map