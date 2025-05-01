"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudiencesBetaOutput = void 0;
var ListAudiencesBetaOutput = (function () {
    function ListAudiencesBetaOutput() {
    }
    ListAudiencesBetaOutput.getAttributeTypeMap = function () {
        return ListAudiencesBetaOutput.attributeTypeMap;
    };
    ListAudiencesBetaOutput.discriminator = undefined;
    ListAudiencesBetaOutput.attributeTypeMap = [
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
    return ListAudiencesBetaOutput;
}());
exports.ListAudiencesBetaOutput = ListAudiencesBetaOutput;
//# sourceMappingURL=listAudiencesBetaOutput.js.map