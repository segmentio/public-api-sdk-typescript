"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudiencesAlphaOutput = void 0;
var ListAudiencesAlphaOutput = (function () {
    function ListAudiencesAlphaOutput() {
    }
    ListAudiencesAlphaOutput.getAttributeTypeMap = function () {
        return ListAudiencesAlphaOutput.attributeTypeMap;
    };
    ListAudiencesAlphaOutput.discriminator = undefined;
    ListAudiencesAlphaOutput.attributeTypeMap = [
        {
            name: 'audiences',
            baseName: 'audiences',
            type: 'Array<AudienceSummary>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListAudiencesAlphaOutput;
}());
exports.ListAudiencesAlphaOutput = ListAudiencesAlphaOutput;
//# sourceMappingURL=listAudiencesAlphaOutput.js.map