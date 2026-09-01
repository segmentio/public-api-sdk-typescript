"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchQueryActivationsForSpaceAlphaInput = void 0;
var BatchQueryActivationsForSpaceAlphaInput = (function () {
    function BatchQueryActivationsForSpaceAlphaInput() {
    }
    BatchQueryActivationsForSpaceAlphaInput.getAttributeTypeMap = function () {
        return BatchQueryActivationsForSpaceAlphaInput.attributeTypeMap;
    };
    BatchQueryActivationsForSpaceAlphaInput.discriminator = undefined;
    BatchQueryActivationsForSpaceAlphaInput.attributeTypeMap = [
        {
            name: 'audienceIds',
            baseName: 'audienceIds',
            type: 'Array<string>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationInput',
        },
    ];
    return BatchQueryActivationsForSpaceAlphaInput;
}());
exports.BatchQueryActivationsForSpaceAlphaInput = BatchQueryActivationsForSpaceAlphaInput;
//# sourceMappingURL=batchQueryActivationsForSpaceAlphaInput.js.map