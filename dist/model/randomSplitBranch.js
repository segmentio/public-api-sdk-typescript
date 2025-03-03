"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSplitBranch = void 0;
var RandomSplitBranch = (function () {
    function RandomSplitBranch() {
    }
    RandomSplitBranch.getAttributeTypeMap = function () {
        return RandomSplitBranch.attributeTypeMap;
    };
    RandomSplitBranch.discriminator = undefined;
    RandomSplitBranch.attributeTypeMap = [
        {
            name: 'percentage',
            baseName: 'percentage',
            type: 'number',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
    ];
    return RandomSplitBranch;
}());
exports.RandomSplitBranch = RandomSplitBranch;
//# sourceMappingURL=randomSplitBranch.js.map