"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
var Schedule = (function () {
    function Schedule() {
    }
    Schedule.getAttributeTypeMap = function () {
        return Schedule.attributeTypeMap;
    };
    Schedule.discriminator = undefined;
    Schedule.attributeTypeMap = [
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
    return Schedule;
}());
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.js.map