"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleInputV1 = void 0;
var RuleInputV1 = (function () {
    function RuleInputV1() {
    }
    RuleInputV1.getAttributeTypeMap = function () {
        return RuleInputV1.attributeTypeMap;
    };
    RuleInputV1.discriminator = undefined;
    RuleInputV1.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'RuleInputV1.TypeEnum',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'jsonSchema',
            baseName: 'jsonSchema',
            type: 'any',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
    ];
    return RuleInputV1;
}());
exports.RuleInputV1 = RuleInputV1;
(function (RuleInputV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["COMMON"] = 'COMMON'] = "COMMON";
        TypeEnum[TypeEnum["GROUP"] = 'GROUP'] = "GROUP";
        TypeEnum[TypeEnum["IDENTIFY"] = 'IDENTIFY'] = "IDENTIFY";
        TypeEnum[TypeEnum["PAGE"] = 'PAGE'] = "PAGE";
        TypeEnum[TypeEnum["SCREEN"] = 'SCREEN'] = "SCREEN";
        TypeEnum[TypeEnum["TRACK"] = 'TRACK'] = "TRACK";
    })(TypeEnum = RuleInputV1.TypeEnum || (RuleInputV1.TypeEnum = {}));
})(RuleInputV1 = exports.RuleInputV1 || (exports.RuleInputV1 = {}));
exports.RuleInputV1 = RuleInputV1;
//# sourceMappingURL=ruleInputV1.js.map