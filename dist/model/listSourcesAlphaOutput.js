"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSourcesAlphaOutput = void 0;
var ListSourcesAlphaOutput = (function () {
    function ListSourcesAlphaOutput() {
    }
    ListSourcesAlphaOutput.getAttributeTypeMap = function () {
        return ListSourcesAlphaOutput.attributeTypeMap;
    };
    ListSourcesAlphaOutput.discriminator = undefined;
    ListSourcesAlphaOutput.attributeTypeMap = [
        {
            name: 'sources',
            baseName: 'sources',
            type: 'Array<SourceAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListSourcesAlphaOutput;
}());
exports.ListSourcesAlphaOutput = ListSourcesAlphaOutput;
//# sourceMappingURL=listSourcesAlphaOutput.js.map