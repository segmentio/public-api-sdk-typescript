"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewEntitiesResult = void 0;
var AudiencePreviewEntitiesResult = (function () {
    function AudiencePreviewEntitiesResult() {
    }
    AudiencePreviewEntitiesResult.getAttributeTypeMap = function () {
        return AudiencePreviewEntitiesResult.attributeTypeMap;
    };
    AudiencePreviewEntitiesResult.discriminator = undefined;
    AudiencePreviewEntitiesResult.attributeTypeMap = [
        {
            name: 'entities',
            baseName: 'entities',
            type: '{ [key: string]: Array<EntityProfileDetails>; }',
        },
    ];
    return AudiencePreviewEntitiesResult;
}());
exports.AudiencePreviewEntitiesResult = AudiencePreviewEntitiesResult;
//# sourceMappingURL=audiencePreviewEntitiesResult.js.map