"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceSummary = void 0;
var AudienceSummary = (function () {
    function AudienceSummary() {
    }
    AudienceSummary.getAttributeTypeMap = function () {
        return AudienceSummary.attributeTypeMap;
    };
    AudienceSummary.discriminator = undefined;
    AudienceSummary.attributeTypeMap = [
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
    ];
    return AudienceSummary;
}());
exports.AudienceSummary = AudienceSummary;
//# sourceMappingURL=audienceSummary.js.map