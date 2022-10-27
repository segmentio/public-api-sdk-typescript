"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAdvancedSyncScheduleFromWarehouseV1Output = void 0;
var GetAdvancedSyncScheduleFromWarehouseV1Output = (function () {
    function GetAdvancedSyncScheduleFromWarehouseV1Output() {
    }
    GetAdvancedSyncScheduleFromWarehouseV1Output.getAttributeTypeMap = function () {
        return GetAdvancedSyncScheduleFromWarehouseV1Output.attributeTypeMap;
    };
    GetAdvancedSyncScheduleFromWarehouseV1Output.discriminator = undefined;
    GetAdvancedSyncScheduleFromWarehouseV1Output.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'schedule',
            baseName: 'schedule',
            type: 'Schedule',
        },
    ];
    return GetAdvancedSyncScheduleFromWarehouseV1Output;
}());
exports.GetAdvancedSyncScheduleFromWarehouseV1Output = GetAdvancedSyncScheduleFromWarehouseV1Output;
//# sourceMappingURL=getAdvancedSyncScheduleFromWarehouseV1Output.js.map