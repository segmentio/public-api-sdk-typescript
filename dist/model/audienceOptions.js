"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceOptions = void 0;
var AudienceOptions = (function () {
    function AudienceOptions() {
    }
    AudienceOptions.getAttributeTypeMap = function () {
        return AudienceOptions.attributeTypeMap;
    };
    AudienceOptions.discriminator = undefined;
    AudienceOptions.attributeTypeMap = [
        {
            name: 'includeHistoricalData',
            baseName: 'includeHistoricalData',
            type: 'boolean',
        },
        {
            name: 'filterByExternalIds',
            baseName: 'filterByExternalIds',
            type: 'Array<string>',
        },
        {
            name: 'backfillEventDataDays',
            baseName: 'backfillEventDataDays',
            type: 'number',
        },
    ];
    return AudienceOptions;
}());
exports.AudienceOptions = AudienceOptions;
//# sourceMappingURL=audienceOptions.js.map