"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepLevelAnalytics = void 0;
var StepLevelAnalytics = (function () {
    function StepLevelAnalytics() {
    }
    StepLevelAnalytics.getAttributeTypeMap = function () {
        return StepLevelAnalytics.attributeTypeMap;
    };
    StepLevelAnalytics.discriminator = undefined;
    StepLevelAnalytics.attributeTypeMap = [
        {
            name: 'from',
            baseName: 'from',
            type: 'Key',
        },
        {
            name: 'to',
            baseName: 'to',
            type: 'Key',
        },
        {
            name: 'analytics',
            baseName: 'analytics',
            type: 'Analytics',
        },
    ];
    return StepLevelAnalytics;
}());
exports.StepLevelAnalytics = StepLevelAnalytics;
//# sourceMappingURL=stepLevelAnalytics.js.map