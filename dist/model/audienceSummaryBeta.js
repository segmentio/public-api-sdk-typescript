"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceSummaryBeta = void 0;
var AudienceSummaryBeta = (function () {
    function AudienceSummaryBeta() {
    }
    AudienceSummaryBeta.getAttributeTypeMap = function () {
        return AudienceSummaryBeta.attributeTypeMap;
    };
    AudienceSummaryBeta.discriminator = undefined;
    AudienceSummaryBeta.attributeTypeMap = [
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
            type: 'AudienceDefinitionBeta',
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
            type: 'AudienceOptionsBeta',
        },
    ];
    return AudienceSummaryBeta;
}());
exports.AudienceSummaryBeta = AudienceSummaryBeta;
//# sourceMappingURL=audienceSummaryBeta.js.map