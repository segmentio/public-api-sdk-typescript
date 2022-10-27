"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionSettingV1 = void 0;
var FunctionSettingV1 = (function () {
    function FunctionSettingV1() {
    }
    FunctionSettingV1.getAttributeTypeMap = function () {
        return FunctionSettingV1.attributeTypeMap;
    };
    FunctionSettingV1.discriminator = undefined;
    FunctionSettingV1.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'FunctionSettingV1.TypeEnum',
        },
        {
            name: 'required',
            baseName: 'required',
            type: 'boolean',
        },
        {
            name: 'sensitive',
            baseName: 'sensitive',
            type: 'boolean',
        },
    ];
    return FunctionSettingV1;
}());
exports.FunctionSettingV1 = FunctionSettingV1;
(function (FunctionSettingV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ARRAY"] = 'ARRAY'] = "ARRAY";
        TypeEnum[TypeEnum["BOOLEAN"] = 'BOOLEAN'] = "BOOLEAN";
        TypeEnum[TypeEnum["STRING"] = 'STRING'] = "STRING";
        TypeEnum[TypeEnum["TEXT_MAP"] = 'TEXT_MAP'] = "TEXT_MAP";
    })(TypeEnum = FunctionSettingV1.TypeEnum || (FunctionSettingV1.TypeEnum = {}));
})(FunctionSettingV1 = exports.FunctionSettingV1 || (exports.FunctionSettingV1 = {}));
exports.FunctionSettingV1 = FunctionSettingV1;
//# sourceMappingURL=functionSettingV1.js.map