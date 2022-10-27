"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSourcesCatalogV1Output = void 0;
var GetSourcesCatalogV1Output = (function () {
    function GetSourcesCatalogV1Output() {
    }
    GetSourcesCatalogV1Output.getAttributeTypeMap = function () {
        return GetSourcesCatalogV1Output.attributeTypeMap;
    };
    GetSourcesCatalogV1Output.discriminator = undefined;
    GetSourcesCatalogV1Output.attributeTypeMap = [
        {
            name: 'sourcesCatalog',
            baseName: 'sourcesCatalog',
            type: 'Array<SourceMetadataV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return GetSourcesCatalogV1Output;
}());
exports.GetSourcesCatalogV1Output = GetSourcesCatalogV1Output;
//# sourceMappingURL=getSourcesCatalogV1Output.js.map