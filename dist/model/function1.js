"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function1 = void 0;
var Function1 = (function () {
    function Function1() {
    }
    Function1.getAttributeTypeMap = function () {
        return Function1.attributeTypeMap;
    };
    Function1.discriminator = undefined;
    Function1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'Function1.ResourceTypeEnum',
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
    return Function1;
}());
exports.Function1 = Function1;
(function (Function1) {
    var ResourceTypeEnum;
    (function (ResourceTypeEnum) {
        ResourceTypeEnum[ResourceTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_DESTINATION"] = 'INSERT_DESTINATION'] = "INSERT_DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(ResourceTypeEnum = Function1.ResourceTypeEnum || (Function1.ResourceTypeEnum = {}));
})(Function1 = exports.Function1 || (exports.Function1 = {}));
exports.Function1 = Function1;
//# sourceMappingURL=function1.js.map