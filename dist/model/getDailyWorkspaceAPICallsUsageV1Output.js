"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDailyWorkspaceAPICallsUsageV1Output = void 0;
var GetDailyWorkspaceAPICallsUsageV1Output = (function () {
    function GetDailyWorkspaceAPICallsUsageV1Output() {
    }
    GetDailyWorkspaceAPICallsUsageV1Output.getAttributeTypeMap = function () {
        return GetDailyWorkspaceAPICallsUsageV1Output.attributeTypeMap;
    };
    GetDailyWorkspaceAPICallsUsageV1Output.discriminator = undefined;
    GetDailyWorkspaceAPICallsUsageV1Output.attributeTypeMap = [
        {
            name: 'dailyWorkspaceAPICallsUsage',
            baseName: 'dailyWorkspaceAPICallsUsage',
            type: 'Array<APICallSnapshotV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return GetDailyWorkspaceAPICallsUsageV1Output;
}());
exports.GetDailyWorkspaceAPICallsUsageV1Output = GetDailyWorkspaceAPICallsUsageV1Output;
//# sourceMappingURL=getDailyWorkspaceAPICallsUsageV1Output.js.map