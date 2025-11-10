"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransformationFunctionInstancesAlphaOutput = void 0;
var ListTransformationFunctionInstancesAlphaOutput = (function () {
    function ListTransformationFunctionInstancesAlphaOutput() {
    }
    ListTransformationFunctionInstancesAlphaOutput.getAttributeTypeMap = function () {
        return ListTransformationFunctionInstancesAlphaOutput.attributeTypeMap;
    };
    ListTransformationFunctionInstancesAlphaOutput.discriminator = undefined;
    ListTransformationFunctionInstancesAlphaOutput.attributeTypeMap = [
        {
            name: 'instances',
            baseName: 'instances',
            type: 'Array<TransformationFunctionInstanceAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListTransformationFunctionInstancesAlphaOutput;
}());
exports.ListTransformationFunctionInstancesAlphaOutput = ListTransformationFunctionInstancesAlphaOutput;
//# sourceMappingURL=listTransformationFunctionInstancesAlphaOutput.js.map