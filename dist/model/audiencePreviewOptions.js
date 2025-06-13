"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewOptions = void 0;
var AudiencePreviewOptions = (function () {
    function AudiencePreviewOptions() {
    }
    AudiencePreviewOptions.getAttributeTypeMap = function () {
        return AudiencePreviewOptions.attributeTypeMap;
    };
    AudiencePreviewOptions.discriminator = undefined;
    AudiencePreviewOptions.attributeTypeMap = [
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
    return AudiencePreviewOptions;
}());
exports.AudiencePreviewOptions = AudiencePreviewOptions;
//# sourceMappingURL=audiencePreviewOptions.js.map