"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedWarehouseSyncScheduleV1Input = void 0;
var AdvancedWarehouseSyncScheduleV1Input = (function () {
    function AdvancedWarehouseSyncScheduleV1Input() {
    }
    AdvancedWarehouseSyncScheduleV1Input.getAttributeTypeMap = function () {
        return AdvancedWarehouseSyncScheduleV1Input.attributeTypeMap;
    };
    AdvancedWarehouseSyncScheduleV1Input.discriminator = undefined;
    AdvancedWarehouseSyncScheduleV1Input.attributeTypeMap = [
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
    return AdvancedWarehouseSyncScheduleV1Input;
}());
exports.AdvancedWarehouseSyncScheduleV1Input = AdvancedWarehouseSyncScheduleV1Input;
//# sourceMappingURL=advancedWarehouseSyncScheduleV1Input.js.map