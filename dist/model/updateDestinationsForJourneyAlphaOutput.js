"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinationsForJourneyAlphaOutput = void 0;
var UpdateDestinationsForJourneyAlphaOutput = (function () {
    function UpdateDestinationsForJourneyAlphaOutput() {
    }
    UpdateDestinationsForJourneyAlphaOutput.getAttributeTypeMap = function () {
        return UpdateDestinationsForJourneyAlphaOutput.attributeTypeMap;
    };
    UpdateDestinationsForJourneyAlphaOutput.discriminator = undefined;
    UpdateDestinationsForJourneyAlphaOutput.attributeTypeMap = [
        {
            name: 'containerId',
            baseName: 'containerId',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<DestinationState>',
        },
    ];
    return UpdateDestinationsForJourneyAlphaOutput;
}());
exports.UpdateDestinationsForJourneyAlphaOutput = UpdateDestinationsForJourneyAlphaOutput;
//# sourceMappingURL=updateDestinationsForJourneyAlphaOutput.js.map