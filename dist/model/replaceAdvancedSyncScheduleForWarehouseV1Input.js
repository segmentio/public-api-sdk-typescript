"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceAdvancedSyncScheduleForWarehouseV1Input = void 0;
var ReplaceAdvancedSyncScheduleForWarehouseV1Input = (function () {
    function ReplaceAdvancedSyncScheduleForWarehouseV1Input() {
    }
    ReplaceAdvancedSyncScheduleForWarehouseV1Input.getAttributeTypeMap = function () {
        return ReplaceAdvancedSyncScheduleForWarehouseV1Input.attributeTypeMap;
    };
    ReplaceAdvancedSyncScheduleForWarehouseV1Input.discriminator = undefined;
    ReplaceAdvancedSyncScheduleForWarehouseV1Input.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'schedule',
            baseName: 'schedule',
            type: 'AdvancedWarehouseSyncScheduleV1Input',
        },
    ];
    return ReplaceAdvancedSyncScheduleForWarehouseV1Input;
}());
exports.ReplaceAdvancedSyncScheduleForWarehouseV1Input = ReplaceAdvancedSyncScheduleForWarehouseV1Input;
//# sourceMappingURL=replaceAdvancedSyncScheduleForWarehouseV1Input.js.map