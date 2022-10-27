"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLabelsV1Output = void 0;
var ListLabelsV1Output = (function () {
    function ListLabelsV1Output() {
    }
    ListLabelsV1Output.getAttributeTypeMap = function () {
        return ListLabelsV1Output.attributeTypeMap;
    };
    ListLabelsV1Output.discriminator = undefined;
    ListLabelsV1Output.attributeTypeMap = [
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<LabelV1>',
        },
    ];
    return ListLabelsV1Output;
}());
exports.ListLabelsV1Output = ListLabelsV1Output;
//# sourceMappingURL=listLabelsV1Output.js.map