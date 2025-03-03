"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionSplitState = void 0;
var ConditionSplitState = (function () {
    function ConditionSplitState() {
    }
    ConditionSplitState.getAttributeTypeMap = function () {
        return ConditionSplitState.attributeTypeMap;
    };
    ConditionSplitState.discriminator = undefined;
    ConditionSplitState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ConditionSplitState.TypeEnum',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<TransitionsInner1>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return ConditionSplitState;
}());
exports.ConditionSplitState = ConditionSplitState;
(function (ConditionSplitState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["CONDITION_SPLIT"] = 'CONDITION_SPLIT'] = "CONDITION_SPLIT";
    })(TypeEnum = ConditionSplitState.TypeEnum || (ConditionSplitState.TypeEnum = {}));
})(ConditionSplitState = exports.ConditionSplitState || (exports.ConditionSplitState = {}));
exports.ConditionSplitState = ConditionSplitState;
//# sourceMappingURL=conditionSplitState.js.map