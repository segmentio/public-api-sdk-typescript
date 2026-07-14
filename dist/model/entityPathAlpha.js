"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityPathAlpha = void 0;
var EntityPathAlpha = (function () {
    function EntityPathAlpha() {
    }
    EntityPathAlpha.getAttributeTypeMap = function () {
        return EntityPathAlpha.attributeTypeMap;
    };
    EntityPathAlpha.discriminator = undefined;
    EntityPathAlpha.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'entityName',
            baseName: 'entityName',
            type: 'string',
        },
        {
            name: 'pathName',
            baseName: 'pathName',
            type: 'string',
        },
        {
            name: 'entitySlug',
            baseName: 'entitySlug',
            type: 'string',
        },
        {
            name: 'relationshipSlugs',
            baseName: 'relationshipSlugs',
            type: 'Array<string>',
        },
        {
            name: 'childRelationshipSlugs',
            baseName: 'childRelationshipSlugs',
            type: 'Array<string>',
        },
        {
            name: 'parentRelationshipSlugPath',
            baseName: 'parentRelationshipSlugPath',
            type: 'string',
        },
    ];
    return EntityPathAlpha;
}());
exports.EntityPathAlpha = EntityPathAlpha;
//# sourceMappingURL=entityPathAlpha.js.map