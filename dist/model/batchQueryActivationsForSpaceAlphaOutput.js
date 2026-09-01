"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchQueryActivationsForSpaceAlphaOutput = void 0;
var BatchQueryActivationsForSpaceAlphaOutput = (function () {
    function BatchQueryActivationsForSpaceAlphaOutput() {
    }
    BatchQueryActivationsForSpaceAlphaOutput.getAttributeTypeMap = function () {
        return BatchQueryActivationsForSpaceAlphaOutput.attributeTypeMap;
    };
    BatchQueryActivationsForSpaceAlphaOutput.discriminator = undefined;
    BatchQueryActivationsForSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'activations',
            baseName: 'activations',
            type: 'Array<ActivationOutput>',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<ErrorsInner>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return BatchQueryActivationsForSpaceAlphaOutput;
}());
exports.BatchQueryActivationsForSpaceAlphaOutput = BatchQueryActivationsForSpaceAlphaOutput;
//# sourceMappingURL=batchQueryActivationsForSpaceAlphaOutput.js.map