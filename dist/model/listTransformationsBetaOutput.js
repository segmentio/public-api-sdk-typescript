"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransformationsBetaOutput = void 0;
var ListTransformationsBetaOutput = (function () {
    function ListTransformationsBetaOutput() {
    }
    ListTransformationsBetaOutput.getAttributeTypeMap = function () {
        return ListTransformationsBetaOutput.attributeTypeMap;
    };
    ListTransformationsBetaOutput.discriminator = undefined;
    ListTransformationsBetaOutput.attributeTypeMap = [
        {
            name: 'transformations',
            baseName: 'transformations',
            type: 'Array<TransformationBeta>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListTransformationsBetaOutput;
}());
exports.ListTransformationsBetaOutput = ListTransformationsBetaOutput;
//# sourceMappingURL=listTransformationsBetaOutput.js.map