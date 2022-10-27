"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSelectiveSyncForWarehouseV1Input = void 0;
var UpdateSelectiveSyncForWarehouseV1Input = (function () {
    function UpdateSelectiveSyncForWarehouseV1Input() {
    }
    UpdateSelectiveSyncForWarehouseV1Input.getAttributeTypeMap = function () {
        return UpdateSelectiveSyncForWarehouseV1Input.attributeTypeMap;
    };
    UpdateSelectiveSyncForWarehouseV1Input.discriminator = undefined;
    UpdateSelectiveSyncForWarehouseV1Input.attributeTypeMap = [
        {
            name: 'syncOverrides',
            baseName: 'syncOverrides',
            type: 'Array<WarehouseSyncOverrideV1>',
        },
    ];
    return UpdateSelectiveSyncForWarehouseV1Input;
}());
exports.UpdateSelectiveSyncForWarehouseV1Input = UpdateSelectiveSyncForWarehouseV1Input;
//# sourceMappingURL=updateSelectiveSyncForWarehouseV1Input.js.map