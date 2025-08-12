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
            name: 'id',
            baseName: 'id',
            type: 'string',
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
            name: 'entities',
            baseName: 'entities',
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
    return AudiencePreviewEntitiesResult;
}());
exports.AudiencePreviewEntitiesResult = AudiencePreviewEntitiesResult;
//# sourceMappingURL=audiencePreviewEntitiesResult.js.map