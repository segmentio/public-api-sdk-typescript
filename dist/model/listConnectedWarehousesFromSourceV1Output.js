"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectedWarehousesFromSourceV1Output = void 0;
var ListConnectedWarehousesFromSourceV1Output = (function () {
    function ListConnectedWarehousesFromSourceV1Output() {
    }
    ListConnectedWarehousesFromSourceV1Output.getAttributeTypeMap = function () {
        return ListConnectedWarehousesFromSourceV1Output.attributeTypeMap;
    };
    ListConnectedWarehousesFromSourceV1Output.discriminator = undefined;
    ListConnectedWarehousesFromSourceV1Output.attributeTypeMap = [
        {
            name: 'warehouses',
            baseName: 'warehouses',
            type: 'Array<WarehouseV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListConnectedWarehousesFromSourceV1Output;
}());
exports.ListConnectedWarehousesFromSourceV1Output = ListConnectedWarehousesFromSourceV1Output;
//# sourceMappingURL=listConnectedWarehousesFromSourceV1Output.js.map