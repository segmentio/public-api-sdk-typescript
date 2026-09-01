"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudienceConsumersFromSpaceAndAudienceOutput = void 0;
var ListAudienceConsumersFromSpaceAndAudienceOutput = (function () {
    function ListAudienceConsumersFromSpaceAndAudienceOutput() {
    }
    ListAudienceConsumersFromSpaceAndAudienceOutput.getAttributeTypeMap = function () {
        return ListAudienceConsumersFromSpaceAndAudienceOutput.attributeTypeMap;
    };
    ListAudienceConsumersFromSpaceAndAudienceOutput.discriminator = undefined;
    ListAudienceConsumersFromSpaceAndAudienceOutput.attributeTypeMap = [
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
    return ListAudienceConsumersFromSpaceAndAudienceOutput;
}());
exports.ListAudienceConsumersFromSpaceAndAudienceOutput = ListAudienceConsumersFromSpaceAndAudienceOutput;
//# sourceMappingURL=listAudienceConsumersFromSpaceAndAudienceOutput.js.map