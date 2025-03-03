"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
var Analytics = (function () {
    function Analytics() {
    }
    Analytics.getAttributeTypeMap = function () {
        return Analytics.attributeTypeMap;
    };
    Analytics.discriminator = undefined;
    Analytics.attributeTypeMap = [
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'unique',
            baseName: 'unique',
            type: 'number',
        },
    ];
    return Analytics;
}());
exports.Analytics = Analytics;
//# sourceMappingURL=analytics.js.map