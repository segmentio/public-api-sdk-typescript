"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTraitsAlphaOutput = void 0;
var ListTraitsAlphaOutput = (function () {
    function ListTraitsAlphaOutput() {
    }
    ListTraitsAlphaOutput.getAttributeTypeMap = function () {
        return ListTraitsAlphaOutput.attributeTypeMap;
    };
    ListTraitsAlphaOutput.discriminator = undefined;
    ListTraitsAlphaOutput.attributeTypeMap = [
        {
            name: 'traits',
            baseName: 'traits',
            type: 'Array<TraitAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'ForwardOnlyPaginationOutput',
        },
    ];
    return ListTraitsAlphaOutput;
}());
exports.ListTraitsAlphaOutput = ListTraitsAlphaOutput;
//# sourceMappingURL=listTraitsAlphaOutput.js.map