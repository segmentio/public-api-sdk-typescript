"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeliveryOverviewMetricsAlphaOutput = void 0;
var GetDeliveryOverviewMetricsAlphaOutput = (function () {
    function GetDeliveryOverviewMetricsAlphaOutput() {
    }
    GetDeliveryOverviewMetricsAlphaOutput.getAttributeTypeMap = function () {
        return GetDeliveryOverviewMetricsAlphaOutput.attributeTypeMap;
    };
    GetDeliveryOverviewMetricsAlphaOutput.discriminator = undefined;
    GetDeliveryOverviewMetricsAlphaOutput.attributeTypeMap = [
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
    return GetDeliveryOverviewMetricsAlphaOutput;
}());
exports.GetDeliveryOverviewMetricsAlphaOutput = GetDeliveryOverviewMetricsAlphaOutput;
//# sourceMappingURL=getDeliveryOverviewMetricsAlphaOutput.js.map