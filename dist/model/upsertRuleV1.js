"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRuleV1 = void 0;
var UpsertRuleV1 = (function () {
    function UpsertRuleV1() {
    }
    UpsertRuleV1.getAttributeTypeMap = function () {
        return UpsertRuleV1.attributeTypeMap;
    };
    UpsertRuleV1.discriminator = undefined;
    UpsertRuleV1.attributeTypeMap = [
        {
            name: 'newKey',
            baseName: 'newKey',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'UpsertRuleV1.TypeEnum',
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
    return UpsertRuleV1;
}());
exports.UpsertRuleV1 = UpsertRuleV1;
(function (UpsertRuleV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["COMMON"] = 'COMMON'] = "COMMON";
        TypeEnum[TypeEnum["GROUP"] = 'GROUP'] = "GROUP";
        TypeEnum[TypeEnum["IDENTIFY"] = 'IDENTIFY'] = "IDENTIFY";
        TypeEnum[TypeEnum["PAGE"] = 'PAGE'] = "PAGE";
        TypeEnum[TypeEnum["SCREEN"] = 'SCREEN'] = "SCREEN";
        TypeEnum[TypeEnum["TRACK"] = 'TRACK'] = "TRACK";
    })(TypeEnum = UpsertRuleV1.TypeEnum || (UpsertRuleV1.TypeEnum = {}));
})(UpsertRuleV1 = exports.UpsertRuleV1 || (exports.UpsertRuleV1 = {}));
exports.UpsertRuleV1 = UpsertRuleV1;
//# sourceMappingURL=upsertRuleV1.js.map