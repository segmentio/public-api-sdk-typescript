"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWarehousesV2Output = void 0;
var ListWarehousesV2Output = (function () {
    function ListWarehousesV2Output() {
    }
    ListWarehousesV2Output.getAttributeTypeMap = function () {
        return ListWarehousesV2Output.attributeTypeMap;
    };
    ListWarehousesV2Output.discriminator = undefined;
    ListWarehousesV2Output.attributeTypeMap = [
        {
            name: 'warehouses',
            baseName: 'warehouses',
            type: 'Array<WarehouseV2>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListWarehousesV2Output;
}());
exports.ListWarehousesV2Output = ListWarehousesV2Output;
//# sourceMappingURL=listWarehousesV2Output.js.map