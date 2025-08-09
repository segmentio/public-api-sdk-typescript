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
            type: '{ [key: string]: any; }',
        },
        {
            name: 'idProperty',
            baseName: 'idProperty',
            type: 'string',
        },
        {
            name: 'relationshipSlug',
            baseName: 'relationshipSlug',
            type: 'string',
        },
        {
            name: 'properties',
            baseName: 'properties',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'profiles',
            baseName: 'profiles',
            type: 'Array<Profile>',
        },
        {
            name: 'profilesTruncated',
            baseName: 'profilesTruncated',
            type: 'boolean',
        },
    ];
    return AudiencePreviewResult;
}());
exports.AudiencePreviewResult = AudiencePreviewResult;
//# sourceMappingURL=audiencePreviewResult.js.map