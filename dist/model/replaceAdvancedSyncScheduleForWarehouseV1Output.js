"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceAdvancedSyncScheduleForWarehouseV1Output = void 0;
var ReplaceAdvancedSyncScheduleForWarehouseV1Output = (function () {
    function ReplaceAdvancedSyncScheduleForWarehouseV1Output() {
    }
    ReplaceAdvancedSyncScheduleForWarehouseV1Output.getAttributeTypeMap = function () {
        return ReplaceAdvancedSyncScheduleForWarehouseV1Output.attributeTypeMap;
    };
    ReplaceAdvancedSyncScheduleForWarehouseV1Output.discriminator = undefined;
    ReplaceAdvancedSyncScheduleForWarehouseV1Output.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'schedule',
            baseName: 'schedule',
            type: 'AdvancedWarehouseSyncScheduleV1Output',
        },
    ];
    return ReplaceAdvancedSyncScheduleForWarehouseV1Output;
}());
exports.ReplaceAdvancedSyncScheduleForWarehouseV1Output = ReplaceAdvancedSyncScheduleForWarehouseV1Output;
//# sourceMappingURL=replaceAdvancedSyncScheduleForWarehouseV1Output.js.map