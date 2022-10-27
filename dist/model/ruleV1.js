"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleV1 = void 0;
var RuleV1 = (function () {
    function RuleV1() {
    }
    RuleV1.getAttributeTypeMap = function () {
        return RuleV1.attributeTypeMap;
    };
    RuleV1.discriminator = undefined;
    RuleV1.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'RuleV1.TypeEnum',
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
            name: 'deprecatedAt',
            baseName: 'deprecatedAt',
            type: 'string',
        },
    ];
    return RuleV1;
}());
exports.RuleV1 = RuleV1;
(function (RuleV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["COMMON"] = 'COMMON'] = "COMMON";
        TypeEnum[TypeEnum["GROUP"] = 'GROUP'] = "GROUP";
        TypeEnum[TypeEnum["IDENTIFY"] = 'IDENTIFY'] = "IDENTIFY";
        TypeEnum[TypeEnum["PAGE"] = 'PAGE'] = "PAGE";
        TypeEnum[TypeEnum["SCREEN"] = 'SCREEN'] = "SCREEN";
        TypeEnum[TypeEnum["TRACK"] = 'TRACK'] = "TRACK";
    })(TypeEnum = RuleV1.TypeEnum || (RuleV1.TypeEnum = {}));
})(RuleV1 = exports.RuleV1 || (exports.RuleV1 = {}));
exports.RuleV1 = RuleV1;
//# sourceMappingURL=ruleV1.js.map