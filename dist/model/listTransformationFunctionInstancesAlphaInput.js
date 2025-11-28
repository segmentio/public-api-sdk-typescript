"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransformationFunctionInstancesAlphaInput = void 0;
var ListTransformationFunctionInstancesAlphaInput = (function () {
    function ListTransformationFunctionInstancesAlphaInput() {
    }
    ListTransformationFunctionInstancesAlphaInput.getAttributeTypeMap = function () {
        return ListTransformationFunctionInstancesAlphaInput.attributeTypeMap;
    };
    ListTransformationFunctionInstancesAlphaInput.discriminator = undefined;
    ListTransformationFunctionInstancesAlphaInput.attributeTypeMap = [
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationInput',
        },
        {
            name: 'functionId',
            baseName: 'functionId',
            type: 'string',
        },
    ];
    return ListTransformationFunctionInstancesAlphaInput;
}());
exports.ListTransformationFunctionInstancesAlphaInput = ListTransformationFunctionInstancesAlphaInput;
//# sourceMappingURL=listTransformationFunctionInstancesAlphaInput.js.map