"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
var Function = (function () {
    function Function() {
    }
    Function.getAttributeTypeMap = function () {
        return Function.attributeTypeMap;
    };
    Function.discriminator = undefined;
    Function.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'Function.ResourceTypeEnum',
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
    return Function;
}());
exports.Function = Function;
(function (Function) {
    var ResourceTypeEnum;
    (function (ResourceTypeEnum) {
        ResourceTypeEnum[ResourceTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_DESTINATION"] = 'INSERT_DESTINATION'] = "INSERT_DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_SOURCE"] = 'INSERT_SOURCE'] = "INSERT_SOURCE";
        ResourceTypeEnum[ResourceTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(ResourceTypeEnum = Function.ResourceTypeEnum || (Function.ResourceTypeEnum = {}));
})(Function = exports.Function || (exports.Function = {}));
exports.Function = Function;
//# sourceMappingURL=function.js.map