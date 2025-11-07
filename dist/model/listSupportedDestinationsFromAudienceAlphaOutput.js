"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSupportedDestinationsFromAudienceAlphaOutput = void 0;
var ListSupportedDestinationsFromAudienceAlphaOutput = (function () {
    function ListSupportedDestinationsFromAudienceAlphaOutput() {
    }
    ListSupportedDestinationsFromAudienceAlphaOutput.getAttributeTypeMap = function () {
        return ListSupportedDestinationsFromAudienceAlphaOutput.attributeTypeMap;
    };
    ListSupportedDestinationsFromAudienceAlphaOutput.discriminator = undefined;
    ListSupportedDestinationsFromAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'destinations',
            baseName: 'destinations',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListSupportedDestinationsFromAudienceAlphaOutput;
}());
exports.ListSupportedDestinationsFromAudienceAlphaOutput = ListSupportedDestinationsFromAudienceAlphaOutput;
//# sourceMappingURL=listSupportedDestinationsFromAudienceAlphaOutput.js.map