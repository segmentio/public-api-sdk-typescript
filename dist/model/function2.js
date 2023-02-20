"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function2 = void 0;
var Function2 = (function () {
    function Function2() {
    }
    Function2.getAttributeTypeMap = function () {
        return Function2.attributeTypeMap;
    };
    Function2.discriminator = undefined;
    Function2.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'Function2.ResourceTypeEnum',
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
    return Function2;
}());
exports.Function2 = Function2;
(function (Function2) {
    var ResourceTypeEnum;
    (function (ResourceTypeEnum) {
        ResourceTypeEnum[ResourceTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_DESTINATION"] = 'INSERT_DESTINATION'] = "INSERT_DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(ResourceTypeEnum = Function2.ResourceTypeEnum || (Function2.ResourceTypeEnum = {}));
})(Function2 = exports.Function2 || (exports.Function2 = {}));
exports.Function2 = Function2;
//# sourceMappingURL=function2.js.map