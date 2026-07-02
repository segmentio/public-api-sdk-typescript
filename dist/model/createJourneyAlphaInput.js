"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJourneyAlphaInput = void 0;
var CreateJourneyAlphaInput = (function () {
    function CreateJourneyAlphaInput() {
    }
    CreateJourneyAlphaInput.getAttributeTypeMap = function () {
        return CreateJourneyAlphaInput.attributeTypeMap;
    };
    CreateJourneyAlphaInput.discriminator = undefined;
    CreateJourneyAlphaInput.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'JourneyDefinition',
        },
    ];
    return CreateJourneyAlphaInput;
}());
exports.CreateJourneyAlphaInput = CreateJourneyAlphaInput;
//# sourceMappingURL=createJourneyAlphaInput.js.map