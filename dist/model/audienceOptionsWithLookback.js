"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceOptionsWithLookback = void 0;
var AudienceOptionsWithLookback = (function () {
    function AudienceOptionsWithLookback() {
    }
    AudienceOptionsWithLookback.getAttributeTypeMap = function () {
        return AudienceOptionsWithLookback.attributeTypeMap;
    };
    AudienceOptionsWithLookback.discriminator = undefined;
    AudienceOptionsWithLookback.attributeTypeMap = [
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
    return AudienceOptionsWithLookback;
}());
exports.AudienceOptionsWithLookback = AudienceOptionsWithLookback;
//# sourceMappingURL=audienceOptionsWithLookback.js.map