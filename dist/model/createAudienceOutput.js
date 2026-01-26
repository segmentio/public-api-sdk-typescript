"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceOutput = void 0;
var CreateAudienceOutput = (function () {
    function CreateAudienceOutput() {
    }
    CreateAudienceOutput.getAttributeTypeMap = function () {
        return CreateAudienceOutput.attributeTypeMap;
    };
    CreateAudienceOutput.discriminator = undefined;
    CreateAudienceOutput.attributeTypeMap = [
        {
            name: 'audience',
            baseName: 'audience',
            type: 'AudienceSummary',
        },
    ];
    return CreateAudienceOutput;
}());
exports.CreateAudienceOutput = CreateAudienceOutput;
//# sourceMappingURL=createAudienceOutput.js.map