"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLabelsAlphaOutput = void 0;
var ListLabelsAlphaOutput = (function () {
    function ListLabelsAlphaOutput() {
    }
    ListLabelsAlphaOutput.getAttributeTypeMap = function () {
        return ListLabelsAlphaOutput.attributeTypeMap;
    };
    ListLabelsAlphaOutput.discriminator = undefined;
    ListLabelsAlphaOutput.attributeTypeMap = [
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<LabelAlpha>',
        },
    ];
    return ListLabelsAlphaOutput;
}());
exports.ListLabelsAlphaOutput = ListLabelsAlphaOutput;
//# sourceMappingURL=listLabelsAlphaOutput.js.map