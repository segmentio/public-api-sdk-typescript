"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencePreviewProfileResult = void 0;
var AudiencePreviewProfileResult = (function () {
    function AudiencePreviewProfileResult() {
    }
    AudiencePreviewProfileResult.getAttributeTypeMap = function () {
        return AudiencePreviewProfileResult.attributeTypeMap;
    };
    AudiencePreviewProfileResult.discriminator = undefined;
    AudiencePreviewProfileResult.attributeTypeMap = [
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
    return AudiencePreviewProfileResult;
}());
exports.AudiencePreviewProfileResult = AudiencePreviewProfileResult;
//# sourceMappingURL=audiencePreviewProfileResult.js.map