"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyAnalytics = void 0;
var JourneyAnalytics = (function () {
    function JourneyAnalytics() {
    }
    JourneyAnalytics.getAttributeTypeMap = function () {
        return JourneyAnalytics.attributeTypeMap;
    };
    JourneyAnalytics.discriminator = undefined;
    JourneyAnalytics.attributeTypeMap = [
        {
            name: 'topLevelAnalytics',
            baseName: 'topLevelAnalytics',
            type: 'TopLevelAnalytics',
        },
        {
            name: 'stepLevelAnalytics',
            baseName: 'stepLevelAnalytics',
            type: 'Array<StepLevelAnalytics>',
        },
    ];
    return JourneyAnalytics;
}());
exports.JourneyAnalytics = JourneyAnalytics;
//# sourceMappingURL=journeyAnalytics.js.map