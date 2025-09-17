"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionV1 = void 0;
var FunctionV1 = (function () {
    function FunctionV1() {
    }
    FunctionV1.getAttributeTypeMap = function () {
        return FunctionV1.attributeTypeMap;
    };
    FunctionV1.discriminator = undefined;
    FunctionV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'FunctionV1.ResourceTypeEnum',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'deployedAt',
            baseName: 'deployedAt',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'Array<FunctionSettingV1>',
        },
        {
            name: 'displayName',
            baseName: 'displayName',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logoUrl',
            baseName: 'logoUrl',
            type: 'string',
        },
        {
            name: 'previewWebhookUrl',
            baseName: 'previewWebhookUrl',
            type: 'string',
        },
        {
            name: 'batchMaxCount',
            baseName: 'batchMaxCount',
            type: 'number',
        },
        {
            name: 'catalogId',
            baseName: 'catalogId',
            type: 'string',
        },
        {
            name: 'isLatestVersion',
            baseName: 'isLatestVersion',
            type: 'boolean',
        },
    ];
    return FunctionV1;
}());
exports.FunctionV1 = FunctionV1;
(function (FunctionV1) {
    var ResourceTypeEnum;
    (function (ResourceTypeEnum) {
        ResourceTypeEnum[ResourceTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT"] = 'INSERT'] = "INSERT";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_DESTINATION"] = 'INSERT_DESTINATION'] = "INSERT_DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_SOURCE"] = 'INSERT_SOURCE'] = "INSERT_SOURCE";
        ResourceTypeEnum[ResourceTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(ResourceTypeEnum = FunctionV1.ResourceTypeEnum || (FunctionV1.ResourceTypeEnum = {}));
})(FunctionV1 = exports.FunctionV1 || (exports.FunctionV1 = {}));
exports.FunctionV1 = FunctionV1;
//# sourceMappingURL=functionV1.js.map