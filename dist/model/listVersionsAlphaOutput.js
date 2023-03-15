"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVersionsAlphaOutput = void 0;
var ListVersionsAlphaOutput = (function () {
    function ListVersionsAlphaOutput() {
    }
    ListVersionsAlphaOutput.getAttributeTypeMap = function () {
        return ListVersionsAlphaOutput.attributeTypeMap;
    };
    ListVersionsAlphaOutput.discriminator = undefined;
    ListVersionsAlphaOutput.attributeTypeMap = [
        {
            name: 'versions',
            baseName: 'versions',
            type: 'Array<Version>',
        },
    ];
    return ListVersionsAlphaOutput;
}());
exports.ListVersionsAlphaOutput = ListVersionsAlphaOutput;
//# sourceMappingURL=listVersionsAlphaOutput.js.map