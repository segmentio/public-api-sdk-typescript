"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlDbtCloudScheduleConfig = void 0;
var ReverseEtlDbtCloudScheduleConfig = (function () {
    function ReverseEtlDbtCloudScheduleConfig() {
    }
    ReverseEtlDbtCloudScheduleConfig.getAttributeTypeMap = function () {
        return ReverseEtlDbtCloudScheduleConfig.attributeTypeMap;
    };
    ReverseEtlDbtCloudScheduleConfig.discriminator = undefined;
    ReverseEtlDbtCloudScheduleConfig.attributeTypeMap = [
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
    return ReverseEtlDbtCloudScheduleConfig;
}());
exports.ReverseEtlDbtCloudScheduleConfig = ReverseEtlDbtCloudScheduleConfig;
//# sourceMappingURL=reverseEtlDbtCloudScheduleConfig.js.map