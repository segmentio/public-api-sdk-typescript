"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListActivationsAlphaOutput = void 0;
var ListActivationsAlphaOutput = (function () {
    function ListActivationsAlphaOutput() {
    }
    ListActivationsAlphaOutput.getAttributeTypeMap = function () {
        return ListActivationsAlphaOutput.attributeTypeMap;
    };
    ListActivationsAlphaOutput.discriminator = undefined;
    ListActivationsAlphaOutput.attributeTypeMap = [
        {
            name: 'activations',
            baseName: 'activations',
            type: 'Array<ActivationOutput>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListActivationsAlphaOutput;
}());
exports.ListActivationsAlphaOutput = ListActivationsAlphaOutput;
//# sourceMappingURL=listActivationsAlphaOutput.js.map