"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceStepsForJourneyAlphaInput = void 0;
var ReplaceStepsForJourneyAlphaInput = (function () {
    function ReplaceStepsForJourneyAlphaInput() {
    }
    ReplaceStepsForJourneyAlphaInput.getAttributeTypeMap = function () {
        return ReplaceStepsForJourneyAlphaInput.attributeTypeMap;
    };
    ReplaceStepsForJourneyAlphaInput.discriminator = undefined;
    ReplaceStepsForJourneyAlphaInput.attributeTypeMap = [
        {
            name: 'initialState',
            baseName: 'initialState',
            type: 'string',
        },
        {
            name: 'states',
            baseName: 'states',
            type: 'Array<JourneyState>',
        },
    ];
    return ReplaceStepsForJourneyAlphaInput;
}());
exports.ReplaceStepsForJourneyAlphaInput = ReplaceStepsForJourneyAlphaInput;
//# sourceMappingURL=replaceStepsForJourneyAlphaInput.js.map