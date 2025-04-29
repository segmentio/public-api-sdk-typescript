"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAudienceBetaOutput = void 0;
var GetAudienceBetaOutput = (function () {
    function GetAudienceBetaOutput() {
    }
    GetAudienceBetaOutput.getAttributeTypeMap = function () {
        return GetAudienceBetaOutput.attributeTypeMap;
    };
    GetAudienceBetaOutput.discriminator = undefined;
    GetAudienceBetaOutput.attributeTypeMap = [
        {
            name: 'audience',
            baseName: 'audience',
            type: 'AudienceSummary',
        },
    ];
    return GetAudienceBetaOutput;
}());
exports.GetAudienceBetaOutput = GetAudienceBetaOutput;
//# sourceMappingURL=getAudienceBetaOutput.js.map