"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlScheduleConfig = void 0;
var ReverseEtlScheduleConfig = (function () {
    function ReverseEtlScheduleConfig() {
    }
    ReverseEtlScheduleConfig.getAttributeTypeMap = function () {
        return ReverseEtlScheduleConfig.attributeTypeMap;
    };
    ReverseEtlScheduleConfig.discriminator = undefined;
    ReverseEtlScheduleConfig.attributeTypeMap = [
        {
            name: 'interval',
            baseName: 'interval',
            type: 'string',
        },
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
        {
            name: 'spec',
            baseName: 'spec',
            type: 'string',
        },
        {
            name: 'jobId',
            baseName: 'jobId',
            type: 'string',
        },
        {
            name: 'accountId',
            baseName: 'accountId',
            type: 'string',
        },
    ];
    return ReverseEtlScheduleConfig;
}());
exports.ReverseEtlScheduleConfig = ReverseEtlScheduleConfig;
//# sourceMappingURL=reverseEtlScheduleConfig.js.map