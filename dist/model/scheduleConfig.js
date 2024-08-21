"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleConfig = void 0;
var ScheduleConfig = (function () {
    function ScheduleConfig() {
    }
    ScheduleConfig.getAttributeTypeMap = function () {
        return ScheduleConfig.attributeTypeMap;
    };
    ScheduleConfig.discriminator = undefined;
    ScheduleConfig.attributeTypeMap = [
        {
            name: 'interval',
            baseName: 'interval',
            type: 'string',
        },
    ];
    return ScheduleConfig;
}());
exports.ScheduleConfig = ScheduleConfig;
//# sourceMappingURL=scheduleConfig.js.map