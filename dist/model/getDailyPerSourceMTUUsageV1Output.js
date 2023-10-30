"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDailyPerSourceMTUUsageV1Output = void 0;
var GetDailyPerSourceMTUUsageV1Output = (function () {
    function GetDailyPerSourceMTUUsageV1Output() {
    }
    GetDailyPerSourceMTUUsageV1Output.getAttributeTypeMap = function () {
        return GetDailyPerSourceMTUUsageV1Output.attributeTypeMap;
    };
    GetDailyPerSourceMTUUsageV1Output.discriminator = undefined;
    GetDailyPerSourceMTUUsageV1Output.attributeTypeMap = [
        {
            name: 'dailyPerSourceMTUUsage',
            baseName: 'dailyPerSourceMTUUsage',
            type: 'Array<UsersPerSourceSnapshotV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetDailyPerSourceMTUUsageV1Output;
}());
exports.GetDailyPerSourceMTUUsageV1Output = GetDailyPerSourceMTUUsageV1Output;
//# sourceMappingURL=getDailyPerSourceMTUUsageV1Output.js.map