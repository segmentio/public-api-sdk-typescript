"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSourcesV1Output = void 0;
var ListSourcesV1Output = (function () {
    function ListSourcesV1Output() {
    }
    ListSourcesV1Output.getAttributeTypeMap = function () {
        return ListSourcesV1Output.attributeTypeMap;
    };
    ListSourcesV1Output.discriminator = undefined;
    ListSourcesV1Output.attributeTypeMap = [
        {
            name: 'sources',
            baseName: 'sources',
            type: 'Array<SourceV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListSourcesV1Output;
}());
exports.ListSourcesV1Output = ListSourcesV1Output;
//# sourceMappingURL=listSourcesV1Output.js.map