"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListComputedTraitsAlphaOutput = void 0;
var ListComputedTraitsAlphaOutput = (function () {
    function ListComputedTraitsAlphaOutput() {
    }
    ListComputedTraitsAlphaOutput.getAttributeTypeMap = function () {
        return ListComputedTraitsAlphaOutput.attributeTypeMap;
    };
    ListComputedTraitsAlphaOutput.discriminator = undefined;
    ListComputedTraitsAlphaOutput.attributeTypeMap = [
        {
            name: 'computedTraits',
            baseName: 'computedTraits',
            type: 'Array<ComputedTraitSummary>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListComputedTraitsAlphaOutput;
}());
exports.ListComputedTraitsAlphaOutput = ListComputedTraitsAlphaOutput;
//# sourceMappingURL=listComputedTraitsAlphaOutput.js.map