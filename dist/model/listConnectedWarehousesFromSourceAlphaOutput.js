"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectedWarehousesFromSourceAlphaOutput = void 0;
var ListConnectedWarehousesFromSourceAlphaOutput = (function () {
    function ListConnectedWarehousesFromSourceAlphaOutput() {
    }
    ListConnectedWarehousesFromSourceAlphaOutput.getAttributeTypeMap = function () {
        return ListConnectedWarehousesFromSourceAlphaOutput.attributeTypeMap;
    };
    ListConnectedWarehousesFromSourceAlphaOutput.discriminator = undefined;
    ListConnectedWarehousesFromSourceAlphaOutput.attributeTypeMap = [
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
    return ListConnectedWarehousesFromSourceAlphaOutput;
}());
exports.ListConnectedWarehousesFromSourceAlphaOutput = ListConnectedWarehousesFromSourceAlphaOutput;
//# sourceMappingURL=listConnectedWarehousesFromSourceAlphaOutput.js.map