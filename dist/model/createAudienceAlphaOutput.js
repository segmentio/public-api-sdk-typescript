"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceAlphaOutput = void 0;
var CreateAudienceAlphaOutput = (function () {
    function CreateAudienceAlphaOutput() {
    }
    CreateAudienceAlphaOutput.getAttributeTypeMap = function () {
        return CreateAudienceAlphaOutput.attributeTypeMap;
    };
    CreateAudienceAlphaOutput.discriminator = undefined;
    CreateAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'audience',
            baseName: 'audience',
            type: 'AudienceSummary',
        },
    ];
    return CreateAudienceAlphaOutput;
}());
exports.CreateAudienceAlphaOutput = CreateAudienceAlphaOutput;
//# sourceMappingURL=createAudienceAlphaOutput.js.map