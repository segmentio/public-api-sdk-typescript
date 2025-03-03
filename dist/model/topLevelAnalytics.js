"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopLevelAnalytics = void 0;
var TopLevelAnalytics = (function () {
    function TopLevelAnalytics() {
    }
    TopLevelAnalytics.getAttributeTypeMap = function () {
        return TopLevelAnalytics.attributeTypeMap;
    };
    TopLevelAnalytics.discriminator = undefined;
    TopLevelAnalytics.attributeTypeMap = [
        {
            name: 'entered',
            baseName: 'entered',
            type: 'Analytics',
        },
        {
            name: 'completed',
            baseName: 'completed',
            type: 'Analytics',
        },
        {
            name: 'inProgress',
            baseName: 'inProgress',
            type: 'Analytics',
        },
        {
            name: 'exited',
            baseName: 'exited',
            type: 'Analytics',
        },
    ];
    return TopLevelAnalytics;
}());
exports.TopLevelAnalytics = TopLevelAnalytics;
//# sourceMappingURL=topLevelAnalytics.js.map