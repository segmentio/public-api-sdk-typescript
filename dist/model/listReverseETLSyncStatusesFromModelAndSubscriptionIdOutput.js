"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput = void 0;
var ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput = (function () {
    function ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput() {
    }
    ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput.getAttributeTypeMap = function () {
        return ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput.attributeTypeMap;
    };
    ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput.discriminator = undefined;
    ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput.attributeTypeMap = [
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
    return ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput;
}());
exports.ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput = ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput;
//# sourceMappingURL=listReverseETLSyncStatusesFromModelAndSubscriptionIdOutput.js.map