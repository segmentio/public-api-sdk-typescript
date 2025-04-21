"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudienceConsumersFromSpaceAndAudienceAlphaOutput = void 0;
var ListAudienceConsumersFromSpaceAndAudienceAlphaOutput = (function () {
    function ListAudienceConsumersFromSpaceAndAudienceAlphaOutput() {
    }
    ListAudienceConsumersFromSpaceAndAudienceAlphaOutput.getAttributeTypeMap = function () {
        return ListAudienceConsumersFromSpaceAndAudienceAlphaOutput.attributeTypeMap;
    };
    ListAudienceConsumersFromSpaceAndAudienceAlphaOutput.discriminator = undefined;
    ListAudienceConsumersFromSpaceAndAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'audiences',
            baseName: 'audiences',
            type: 'Array<AudienceSummary>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListAudienceConsumersFromSpaceAndAudienceAlphaOutput;
}());
exports.ListAudienceConsumersFromSpaceAndAudienceAlphaOutput = ListAudienceConsumersFromSpaceAndAudienceAlphaOutput;
//# sourceMappingURL=listAudienceConsumersFromSpaceAndAudienceAlphaOutput.js.map