"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReverseETLSyncStatusesBySubscriptionIdOutput = void 0;
var GetReverseETLSyncStatusesBySubscriptionIdOutput = (function () {
    function GetReverseETLSyncStatusesBySubscriptionIdOutput() {
    }
    GetReverseETLSyncStatusesBySubscriptionIdOutput.getAttributeTypeMap = function () {
        return GetReverseETLSyncStatusesBySubscriptionIdOutput.attributeTypeMap;
    };
    GetReverseETLSyncStatusesBySubscriptionIdOutput.discriminator = undefined;
    GetReverseETLSyncStatusesBySubscriptionIdOutput.attributeTypeMap = [
        {
            name: 'syncStatuses',
            baseName: 'syncStatuses',
            type: 'Array<ReverseETLSyncStatus>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetReverseETLSyncStatusesBySubscriptionIdOutput;
}());
exports.GetReverseETLSyncStatusesBySubscriptionIdOutput = GetReverseETLSyncStatusesBySubscriptionIdOutput;
//# sourceMappingURL=getReverseETLSyncStatusesBySubscriptionIdOutput.js.map