"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceSummaryWithAudienceTypeAndLookback = void 0;
var AudienceSummaryWithAudienceTypeAndLookback = (function () {
    function AudienceSummaryWithAudienceTypeAndLookback() {
    }
    AudienceSummaryWithAudienceTypeAndLookback.getAttributeTypeMap = function () {
        return AudienceSummaryWithAudienceTypeAndLookback.attributeTypeMap;
    };
    AudienceSummaryWithAudienceTypeAndLookback.discriminator = undefined;
    AudienceSummaryWithAudienceTypeAndLookback.attributeTypeMap = [
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'AudienceSummaryWithAudienceTypeAndLookback.AudienceTypeEnum',
        },
        {
            name: 'computeCadence',
            baseName: 'computeCadence',
            type: 'AudienceComputeCadence',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptionsWithLookback',
        },
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
            type: 'AudienceDefinition',
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
    ];
    return AudienceSummaryWithAudienceTypeAndLookback;
}());
exports.AudienceSummaryWithAudienceTypeAndLookback = AudienceSummaryWithAudienceTypeAndLookback;
(function (AudienceSummaryWithAudienceTypeAndLookback) {
    var AudienceTypeEnum;
    (function (AudienceTypeEnum) {
        AudienceTypeEnum[AudienceTypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        AudienceTypeEnum[AudienceTypeEnum["LINKED"] = 'LINKED'] = "LINKED";
        AudienceTypeEnum[AudienceTypeEnum["USERS"] = 'USERS'] = "USERS";
    })(AudienceTypeEnum = AudienceSummaryWithAudienceTypeAndLookback.AudienceTypeEnum || (AudienceSummaryWithAudienceTypeAndLookback.AudienceTypeEnum = {}));
})(AudienceSummaryWithAudienceTypeAndLookback = exports.AudienceSummaryWithAudienceTypeAndLookback || (exports.AudienceSummaryWithAudienceTypeAndLookback = {}));
exports.AudienceSummaryWithAudienceTypeAndLookback = AudienceSummaryWithAudienceTypeAndLookback;
//# sourceMappingURL=audienceSummaryWithAudienceTypeAndLookback.js.map