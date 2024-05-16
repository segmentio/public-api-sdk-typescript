"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedTraitSummary = void 0;
var ComputedTraitSummary = (function () {
    function ComputedTraitSummary() {
    }
    ComputedTraitSummary.getAttributeTypeMap = function () {
        return ComputedTraitSummary.attributeTypeMap;
    };
    ComputedTraitSummary.discriminator = undefined;
    ComputedTraitSummary.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'Definition',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'updatedBy',
            baseName: 'updatedBy',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'TraitOptions',
        },
    ];
    return ComputedTraitSummary;
}());
exports.ComputedTraitSummary = ComputedTraitSummary;
//# sourceMappingURL=computedTraitSummary.js.map