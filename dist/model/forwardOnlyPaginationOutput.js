"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardOnlyPaginationOutput = void 0;
var ForwardOnlyPaginationOutput = (function () {
    function ForwardOnlyPaginationOutput() {
    }
    ForwardOnlyPaginationOutput.getAttributeTypeMap = function () {
        return ForwardOnlyPaginationOutput.attributeTypeMap;
    };
    ForwardOnlyPaginationOutput.discriminator = undefined;
    ForwardOnlyPaginationOutput.attributeTypeMap = [
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
        {
            name: 'current',
            baseName: 'current',
            type: 'string',
        },
        {
            name: 'totalEntries',
            baseName: 'totalEntries',
            type: 'number',
        },
    ];
    return ForwardOnlyPaginationOutput;
}());
exports.ForwardOnlyPaginationOutput = ForwardOnlyPaginationOutput;
//# sourceMappingURL=forwardOnlyPaginationOutput.js.map