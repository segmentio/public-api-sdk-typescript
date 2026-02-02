"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAudienceOutput = void 0;
var GetAudienceOutput = (function () {
    function GetAudienceOutput() {
    }
    GetAudienceOutput.getAttributeTypeMap = function () {
        return GetAudienceOutput.attributeTypeMap;
    };
    GetAudienceOutput.discriminator = undefined;
    GetAudienceOutput.attributeTypeMap = [
        {
            name: 'audience',
            baseName: 'audience',
            type: 'AudienceSummaryWithAudienceTypeAndLookback',
        },
    ];
    return GetAudienceOutput;
}());
exports.GetAudienceOutput = GetAudienceOutput;
//# sourceMappingURL=getAudienceOutput.js.map