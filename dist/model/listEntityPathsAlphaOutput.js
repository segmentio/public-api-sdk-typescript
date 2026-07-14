"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEntityPathsAlphaOutput = void 0;
var ListEntityPathsAlphaOutput = (function () {
    function ListEntityPathsAlphaOutput() {
    }
    ListEntityPathsAlphaOutput.getAttributeTypeMap = function () {
        return ListEntityPathsAlphaOutput.attributeTypeMap;
    };
    ListEntityPathsAlphaOutput.discriminator = undefined;
    ListEntityPathsAlphaOutput.attributeTypeMap = [
        {
            name: 'entityPaths',
            baseName: 'entityPaths',
            type: 'Array<EntityPathAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListEntityPathsAlphaOutput;
}());
exports.ListEntityPathsAlphaOutput = ListEntityPathsAlphaOutput;
//# sourceMappingURL=listEntityPathsAlphaOutput.js.map