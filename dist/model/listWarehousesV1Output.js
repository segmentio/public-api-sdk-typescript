"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWarehousesV1Output = void 0;
var ListWarehousesV1Output = (function () {
    function ListWarehousesV1Output() {
    }
    ListWarehousesV1Output.getAttributeTypeMap = function () {
        return ListWarehousesV1Output.attributeTypeMap;
    };
    ListWarehousesV1Output.discriminator = undefined;
    ListWarehousesV1Output.attributeTypeMap = [
        {
            name: 'warehouses',
            baseName: 'warehouses',
            type: 'Array<WarehouseV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListWarehousesV1Output;
}());
exports.ListWarehousesV1Output = ListWarehousesV1Output;
//# sourceMappingURL=listWarehousesV1Output.js.map