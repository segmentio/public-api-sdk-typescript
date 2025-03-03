"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionBranch = void 0;
var ConditionBranch = (function () {
    function ConditionBranch() {
    }
    ConditionBranch.getAttributeTypeMap = function () {
        return ConditionBranch.attributeTypeMap;
    };
    ConditionBranch.discriminator = undefined;
    ConditionBranch.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ConditionBranch.TypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
    ];
    return ConditionBranch;
}());
exports.ConditionBranch = ConditionBranch;
(function (ConditionBranch) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["CONDITION"] = 'CONDITION'] = "CONDITION";
    })(TypeEnum = ConditionBranch.TypeEnum || (ConditionBranch.TypeEnum = {}));
})(ConditionBranch = exports.ConditionBranch || (exports.ConditionBranch = {}));
exports.ConditionBranch = ConditionBranch;
//# sourceMappingURL=conditionBranch.js.map