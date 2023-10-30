"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDailyWorkspaceMTUUsageV1Output = void 0;
var GetDailyWorkspaceMTUUsageV1Output = (function () {
    function GetDailyWorkspaceMTUUsageV1Output() {
    }
    GetDailyWorkspaceMTUUsageV1Output.getAttributeTypeMap = function () {
        return GetDailyWorkspaceMTUUsageV1Output.attributeTypeMap;
    };
    GetDailyWorkspaceMTUUsageV1Output.discriminator = undefined;
    GetDailyWorkspaceMTUUsageV1Output.attributeTypeMap = [
        {
            name: 'dailyWorkspaceMTUUsage',
            baseName: 'dailyWorkspaceMTUUsage',
            type: 'Array<MtuSnapshotV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetDailyWorkspaceMTUUsageV1Output;
}());
exports.GetDailyWorkspaceMTUUsageV1Output = GetDailyWorkspaceMTUUsageV1Output;
//# sourceMappingURL=getDailyWorkspaceMTUUsageV1Output.js.map