"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReverseEtlModelsOutput = void 0;
var ListReverseEtlModelsOutput = (function () {
    function ListReverseEtlModelsOutput() {
    }
    ListReverseEtlModelsOutput.getAttributeTypeMap = function () {
        return ListReverseEtlModelsOutput.attributeTypeMap;
    };
    ListReverseEtlModelsOutput.discriminator = undefined;
    ListReverseEtlModelsOutput.attributeTypeMap = [
        {
            name: 'models',
            baseName: 'models',
            type: 'Array<ReverseEtlModel>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListReverseEtlModelsOutput;
}());
exports.ListReverseEtlModelsOutput = ListReverseEtlModelsOutput;
//# sourceMappingURL=listReverseEtlModelsOutput.js.map