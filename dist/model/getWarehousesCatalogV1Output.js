"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWarehousesCatalogV1Output = void 0;
var GetWarehousesCatalogV1Output = (function () {
    function GetWarehousesCatalogV1Output() {
    }
    GetWarehousesCatalogV1Output.getAttributeTypeMap = function () {
        return GetWarehousesCatalogV1Output.attributeTypeMap;
    };
    GetWarehousesCatalogV1Output.discriminator = undefined;
    GetWarehousesCatalogV1Output.attributeTypeMap = [
        {
            name: 'warehousesCatalog',
            baseName: 'warehousesCatalog',
            type: 'Array<WarehouseMetadataV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetWarehousesCatalogV1Output;
}());
exports.GetWarehousesCatalogV1Output = GetWarehousesCatalogV1Output;
//# sourceMappingURL=getWarehousesCatalogV1Output.js.map