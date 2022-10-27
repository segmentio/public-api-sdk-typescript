"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedWarehouseSyncScheduleV1Output = void 0;
var AdvancedWarehouseSyncScheduleV1Output = (function () {
    function AdvancedWarehouseSyncScheduleV1Output() {
    }
    AdvancedWarehouseSyncScheduleV1Output.getAttributeTypeMap = function () {
        return AdvancedWarehouseSyncScheduleV1Output.attributeTypeMap;
    };
    AdvancedWarehouseSyncScheduleV1Output.discriminator = undefined;
    AdvancedWarehouseSyncScheduleV1Output.attributeTypeMap = [
        {
            name: 'times',
            baseName: 'times',
            type: 'Array<WarehouseAdvancedSyncV1>',
        },
        {
            name: 'timezone',
            baseName: 'timezone',
            type: 'string',
        },
    ];
    return AdvancedWarehouseSyncScheduleV1Output;
}());
exports.AdvancedWarehouseSyncScheduleV1Output = AdvancedWarehouseSyncScheduleV1Output;
//# sourceMappingURL=advancedWarehouseSyncScheduleV1Output.js.map