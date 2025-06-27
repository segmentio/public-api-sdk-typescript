"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAudiencePreviewOptions = void 0;
var ReadAudiencePreviewOptions = (function () {
    function ReadAudiencePreviewOptions() {
    }
    ReadAudiencePreviewOptions.getAttributeTypeMap = function () {
        return ReadAudiencePreviewOptions.attributeTypeMap;
    };
    ReadAudiencePreviewOptions.discriminator = undefined;
    ReadAudiencePreviewOptions.attributeTypeMap = [
        {
            name: 'filterByExternalIds',
            baseName: 'filterByExternalIds',
            type: 'Array<string>',
        },
        {
            name: 'includeHistoricalData',
            baseName: 'includeHistoricalData',
            type: 'boolean',
        },
        {
            name: 'backfillEventDataDays',
            baseName: 'backfillEventDataDays',
            type: 'number',
        },
    ];
    return ReadAudiencePreviewOptions;
}());
exports.ReadAudiencePreviewOptions = ReadAudiencePreviewOptions;
//# sourceMappingURL=readAudiencePreviewOptions.js.map