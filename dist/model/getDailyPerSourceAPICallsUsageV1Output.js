"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDailyPerSourceAPICallsUsageV1Output = void 0;
var GetDailyPerSourceAPICallsUsageV1Output = (function () {
    function GetDailyPerSourceAPICallsUsageV1Output() {
    }
    GetDailyPerSourceAPICallsUsageV1Output.getAttributeTypeMap = function () {
        return GetDailyPerSourceAPICallsUsageV1Output.attributeTypeMap;
    };
    GetDailyPerSourceAPICallsUsageV1Output.discriminator = undefined;
    GetDailyPerSourceAPICallsUsageV1Output.attributeTypeMap = [
        {
            name: 'dailyPerSourceAPICallsUsage',
            baseName: 'dailyPerSourceAPICallsUsage',
            type: 'Array<SourceAPICallSnapshotV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return GetDailyPerSourceAPICallsUsageV1Output;
}());
exports.GetDailyPerSourceAPICallsUsageV1Output = GetDailyPerSourceAPICallsUsageV1Output;
//# sourceMappingURL=getDailyPerSourceAPICallsUsageV1Output.js.map