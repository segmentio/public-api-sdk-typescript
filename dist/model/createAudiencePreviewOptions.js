"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudiencePreviewOptions = void 0;
var CreateAudiencePreviewOptions = (function () {
    function CreateAudiencePreviewOptions() {
    }
    CreateAudiencePreviewOptions.getAttributeTypeMap = function () {
        return CreateAudiencePreviewOptions.attributeTypeMap;
    };
    CreateAudiencePreviewOptions.discriminator = undefined;
    CreateAudiencePreviewOptions.attributeTypeMap = [
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
    return CreateAudiencePreviewOptions;
}());
exports.CreateAudiencePreviewOptions = CreateAudiencePreviewOptions;
//# sourceMappingURL=createAudiencePreviewOptions.js.map