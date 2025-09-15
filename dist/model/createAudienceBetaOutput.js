"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceBetaOutput = void 0;
var CreateAudienceBetaOutput = (function () {
    function CreateAudienceBetaOutput() {
    }
    CreateAudienceBetaOutput.getAttributeTypeMap = function () {
        return CreateAudienceBetaOutput.attributeTypeMap;
    };
    CreateAudienceBetaOutput.discriminator = undefined;
    CreateAudienceBetaOutput.attributeTypeMap = [
        {
            name: 'audience',
            baseName: 'audience',
            type: 'AudienceSummary',
        },
    ];
    return CreateAudienceBetaOutput;
}());
exports.CreateAudienceBetaOutput = CreateAudienceBetaOutput;
//# sourceMappingURL=createAudienceBetaOutput.js.map