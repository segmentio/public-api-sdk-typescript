"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFunctionVersionsAlphaOutput = void 0;
var ListFunctionVersionsAlphaOutput = (function () {
    function ListFunctionVersionsAlphaOutput() {
    }
    ListFunctionVersionsAlphaOutput.getAttributeTypeMap = function () {
        return ListFunctionVersionsAlphaOutput.attributeTypeMap;
    };
    ListFunctionVersionsAlphaOutput.discriminator = undefined;
    ListFunctionVersionsAlphaOutput.attributeTypeMap = [
        {
            name: 'versions',
            baseName: 'versions',
            type: 'Array<Version>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListFunctionVersionsAlphaOutput;
}());
exports.ListFunctionVersionsAlphaOutput = ListFunctionVersionsAlphaOutput;
//# sourceMappingURL=listFunctionVersionsAlphaOutput.js.map