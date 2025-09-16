"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFunctionV1Input = void 0;
var CreateFunctionV1Input = (function () {
    function CreateFunctionV1Input() {
    }
    CreateFunctionV1Input.getAttributeTypeMap = function () {
        return CreateFunctionV1Input.attributeTypeMap;
    };
    CreateFunctionV1Input.discriminator = undefined;
    CreateFunctionV1Input.attributeTypeMap = [
        {
            name: 'code',
            baseName: 'code',
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
            name: 'logoUrl',
            baseName: 'logoUrl',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'CreateFunctionV1Input.ResourceTypeEnum',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];
    return CreateFunctionV1Input;
}());
exports.CreateFunctionV1Input = CreateFunctionV1Input;
(function (CreateFunctionV1Input) {
    var ResourceTypeEnum;
    (function (ResourceTypeEnum) {
        ResourceTypeEnum[ResourceTypeEnum["DESTINATION"] = 'DESTINATION'] = "DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_DESTINATION"] = 'INSERT_DESTINATION'] = "INSERT_DESTINATION";
        ResourceTypeEnum[ResourceTypeEnum["INSERT_SOURCE"] = 'INSERT_SOURCE'] = "INSERT_SOURCE";
        ResourceTypeEnum[ResourceTypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
    })(ResourceTypeEnum = CreateFunctionV1Input.ResourceTypeEnum || (CreateFunctionV1Input.ResourceTypeEnum = {}));
})(CreateFunctionV1Input = exports.CreateFunctionV1Input || (exports.CreateFunctionV1Input = {}));
exports.CreateFunctionV1Input = CreateFunctionV1Input;
//# sourceMappingURL=createFunctionV1Input.js.map