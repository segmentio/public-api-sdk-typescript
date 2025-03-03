"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSplitState = void 0;
var RandomSplitState = (function () {
    function RandomSplitState() {
    }
    RandomSplitState.getAttributeTypeMap = function () {
        return RandomSplitState.attributeTypeMap;
    };
    RandomSplitState.discriminator = undefined;
    RandomSplitState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'RandomSplitState.TypeEnum',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<RandomSplitBranch>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return RandomSplitState;
}());
exports.RandomSplitState = RandomSplitState;
(function (RandomSplitState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["RANDOM_SPLIT"] = 'RANDOM_SPLIT'] = "RANDOM_SPLIT";
        TypeEnum[TypeEnum["EXIT"] = 'EXIT'] = "EXIT";
        TypeEnum[TypeEnum["EXIT_RULE"] = 'EXIT_RULE'] = "EXIT_RULE";
    })(TypeEnum = RandomSplitState.TypeEnum || (RandomSplitState.TypeEnum = {}));
})(RandomSplitState = exports.RandomSplitState || (exports.RandomSplitState = {}));
exports.RandomSplitState = RandomSplitState;
//# sourceMappingURL=randomSplitState.js.map