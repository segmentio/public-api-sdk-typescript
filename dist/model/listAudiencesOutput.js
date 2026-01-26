"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudiencesOutput = void 0;
var ListAudiencesOutput = (function () {
    function ListAudiencesOutput() {
    }
    ListAudiencesOutput.getAttributeTypeMap = function () {
        return ListAudiencesOutput.attributeTypeMap;
    };
    ListAudiencesOutput.discriminator = undefined;
    ListAudiencesOutput.attributeTypeMap = [
        {
            name: 'audiences',
            baseName: 'audiences',
            type: 'Array<AudienceSummaryWithAudienceTypeAndLookback>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListAudiencesOutput;
}());
exports.ListAudiencesOutput = ListAudiencesOutput;
//# sourceMappingURL=listAudiencesOutput.js.map