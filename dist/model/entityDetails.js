"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityDetails = void 0;
var EntityDetails = (function () {
    function EntityDetails() {
    }
    EntityDetails.getAttributeTypeMap = function () {
        return EntityDetails.attributeTypeMap;
    };
    EntityDetails.discriminator = undefined;
    EntityDetails.attributeTypeMap = [
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
    ];
    return EntityDetails;
}());
exports.EntityDetails = EntityDetails;
//# sourceMappingURL=entityDetails.js.map