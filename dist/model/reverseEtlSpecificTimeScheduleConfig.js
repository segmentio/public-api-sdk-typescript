"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlSpecificTimeScheduleConfig = void 0;
var ReverseEtlSpecificTimeScheduleConfig = (function () {
    function ReverseEtlSpecificTimeScheduleConfig() {
    }
    ReverseEtlSpecificTimeScheduleConfig.getAttributeTypeMap = function () {
        return ReverseEtlSpecificTimeScheduleConfig.attributeTypeMap;
    };
    ReverseEtlSpecificTimeScheduleConfig.discriminator = undefined;
    ReverseEtlSpecificTimeScheduleConfig.attributeTypeMap = [
        {
            name: 'days',
            baseName: 'days',
            type: 'Array<number>',
        },
        {
            name: 'hours',
            baseName: 'hours',
            type: 'Array<number>',
        },
        {
            name: 'timezone',
            baseName: 'timezone',
            type: 'string',
        },
    ];
    return ReverseEtlSpecificTimeScheduleConfig;
}());
exports.ReverseEtlSpecificTimeScheduleConfig = ReverseEtlSpecificTimeScheduleConfig;
//# sourceMappingURL=reverseEtlSpecificTimeScheduleConfig.js.map