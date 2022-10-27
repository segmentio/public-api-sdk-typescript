"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRuleV1 = void 0;
var RemoveRuleV1 = (function () {
    function RemoveRuleV1() {
    }
    RemoveRuleV1.getAttributeTypeMap = function () {
        return RemoveRuleV1.attributeTypeMap;
    };
    RemoveRuleV1.discriminator = undefined;
    RemoveRuleV1.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'RemoveRuleV1.TypeEnum',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
    ];
    return RemoveRuleV1;
}());
exports.RemoveRuleV1 = RemoveRuleV1;
(function (RemoveRuleV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["COMMON"] = 'COMMON'] = "COMMON";
        TypeEnum[TypeEnum["GROUP"] = 'GROUP'] = "GROUP";
        TypeEnum[TypeEnum["IDENTIFY"] = 'IDENTIFY'] = "IDENTIFY";
        TypeEnum[TypeEnum["PAGE"] = 'PAGE'] = "PAGE";
        TypeEnum[TypeEnum["SCREEN"] = 'SCREEN'] = "SCREEN";
        TypeEnum[TypeEnum["TRACK"] = 'TRACK'] = "TRACK";
    })(TypeEnum = RemoveRuleV1.TypeEnum || (RemoveRuleV1.TypeEnum = {}));
})(RemoveRuleV1 = exports.RemoveRuleV1 || (exports.RemoveRuleV1 = {}));
exports.RemoveRuleV1 = RemoveRuleV1;
//# sourceMappingURL=removeRuleV1.js.map