"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityProfileDetails = void 0;
var EntityProfileDetails = (function () {
    function EntityProfileDetails() {
    }
    EntityProfileDetails.getAttributeTypeMap = function () {
        return EntityProfileDetails.attributeTypeMap;
    };
    EntityProfileDetails.discriminator = undefined;
    EntityProfileDetails.attributeTypeMap = [
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
    return EntityProfileDetails;
}());
exports.EntityProfileDetails = EntityProfileDetails;
//# sourceMappingURL=entityProfileDetails.js.map