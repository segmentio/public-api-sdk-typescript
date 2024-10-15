"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlCronScheduleConfig = void 0;
var ReverseEtlCronScheduleConfig = (function () {
    function ReverseEtlCronScheduleConfig() {
    }
    ReverseEtlCronScheduleConfig.getAttributeTypeMap = function () {
        return ReverseEtlCronScheduleConfig.attributeTypeMap;
    };
    ReverseEtlCronScheduleConfig.discriminator = undefined;
    ReverseEtlCronScheduleConfig.attributeTypeMap = [
        {
            name: 'spec',
            baseName: 'spec',
            type: 'string',
        },
        {
            name: 'timezone',
            baseName: 'timezone',
            type: 'string',
        },
    ];
    return ReverseEtlCronScheduleConfig;
}());
exports.ReverseEtlCronScheduleConfig = ReverseEtlCronScheduleConfig;
//# sourceMappingURL=reverseEtlCronScheduleConfig.js.map