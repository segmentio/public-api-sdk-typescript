"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeliveryOverviewMetricsBetaOutput = void 0;
var GetDeliveryOverviewMetricsBetaOutput = (function () {
    function GetDeliveryOverviewMetricsBetaOutput() {
    }
    GetDeliveryOverviewMetricsBetaOutput.getAttributeTypeMap = function () {
        return GetDeliveryOverviewMetricsBetaOutput.attributeTypeMap;
    };
    GetDeliveryOverviewMetricsBetaOutput.discriminator = undefined;
    GetDeliveryOverviewMetricsBetaOutput.attributeTypeMap = [
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'dataset',
            baseName: 'dataset',
            type: 'Array<DeliveryOverviewMetricsDataset>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetDeliveryOverviewMetricsBetaOutput;
}());
exports.GetDeliveryOverviewMetricsBetaOutput = GetDeliveryOverviewMetricsBetaOutput;
//# sourceMappingURL=getDeliveryOverviewMetricsBetaOutput.js.map