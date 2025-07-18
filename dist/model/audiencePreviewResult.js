"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewResult = void 0;
var AudiencePreviewResult = (function () {
    function AudiencePreviewResult() {
    }
    AudiencePreviewResult.getAttributeTypeMap = function () {
        return AudiencePreviewResult.attributeTypeMap;
    };
    AudiencePreviewResult.discriminator = undefined;
    AudiencePreviewResult.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'entities',
            baseName: 'entities',
            type: '{ [key: string]: Array<EntityDetails>; }',
        },
    ];
    return AudiencePreviewResult;
}());
exports.AudiencePreviewResult = AudiencePreviewResult;
//# sourceMappingURL=audiencePreviewResult.js.map