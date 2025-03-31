"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceOptionsBeta = void 0;
var AudienceOptionsBeta = (function () {
    function AudienceOptionsBeta() {
    }
    AudienceOptionsBeta.getAttributeTypeMap = function () {
        return AudienceOptionsBeta.attributeTypeMap;
    };
    AudienceOptionsBeta.discriminator = undefined;
    AudienceOptionsBeta.attributeTypeMap = [
        {
            name: 'includeHistoricalData',
            baseName: 'includeHistoricalData',
            type: 'boolean',
        },
        {
            name: 'includeAnonymousUsers',
            baseName: 'includeAnonymousUsers',
            type: 'boolean',
        },
    ];
    return AudienceOptionsBeta;
}());
exports.AudienceOptionsBeta = AudienceOptionsBeta;
//# sourceMappingURL=audienceOptionsBeta.js.map