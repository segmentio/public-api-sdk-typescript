"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyDetails = void 0;
var JourneyDetails = (function () {
    function JourneyDetails() {
    }
    JourneyDetails.getAttributeTypeMap = function () {
        return JourneyDetails.attributeTypeMap;
    };
    JourneyDetails.discriminator = undefined;
    JourneyDetails.attributeTypeMap = [
        {
            name: 'containerId',
            baseName: 'containerId',
            type: 'string',
        },
        {
            name: 'versionNumber',
            baseName: 'versionNumber',
            type: 'number',
        },
    ];
    return JourneyDetails;
}());
exports.JourneyDetails = JourneyDetails;
//# sourceMappingURL=journeyDetails.js.map