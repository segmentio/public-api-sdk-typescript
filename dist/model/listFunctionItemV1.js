"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFunctionItemV1 = void 0;
var ListFunctionItemV1 = (function () {
    function ListFunctionItemV1() {
    }
    ListFunctionItemV1.getAttributeTypeMap = function () {
        return ListFunctionItemV1.attributeTypeMap;
    };
    ListFunctionItemV1.discriminator = undefined;
    ListFunctionItemV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'ListFunctionItemV1.ResourceTypeEnum',
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
            name: 'catalogId',
            baseName: 'catalogId',
            type: 'string',
        },
    ];
    return ListFunctionItemV1;
}());
exports.ListFunctionItemV1 = ListFunctionItemV1;
(function (ListFunctionItemV1) {
    var ResourceTypeEnum;
    (function (ResourceTypeEnum) {
        ResourceTypeEnum[ResourceTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT"] = 'INSERT'] = "INSERT";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_DESTINATION"] = 'INSERT_DESTINATION'] = "INSERT_DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_SOURCE"] = 'INSERT_SOURCE'] = "INSERT_SOURCE";
        ResourceTypeEnum[ResourceTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(ResourceTypeEnum = ListFunctionItemV1.ResourceTypeEnum || (ListFunctionItemV1.ResourceTypeEnum = {}));
})(ListFunctionItemV1 = exports.ListFunctionItemV1 || (exports.ListFunctionItemV1 = {}));
exports.ListFunctionItemV1 = ListFunctionItemV1;
//# sourceMappingURL=listFunctionItemV1.js.map