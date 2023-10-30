"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDestinationsCatalogV1Output = void 0;
var GetDestinationsCatalogV1Output = (function () {
    function GetDestinationsCatalogV1Output() {
    }
    GetDestinationsCatalogV1Output.getAttributeTypeMap = function () {
        return GetDestinationsCatalogV1Output.attributeTypeMap;
    };
    GetDestinationsCatalogV1Output.discriminator = undefined;
    GetDestinationsCatalogV1Output.attributeTypeMap = [
        {
            name: 'destinationsCatalog',
            baseName: 'destinationsCatalog',
            type: 'Array<DestinationMetadataV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetDestinationsCatalogV1Output;
}());
exports.GetDestinationsCatalogV1Output = GetDestinationsCatalogV1Output;
//# sourceMappingURL=getDestinationsCatalogV1Output.js.map