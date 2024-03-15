"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOverviewMetricsDataset = void 0;
var DeliveryOverviewMetricsDataset = (function () {
    function DeliveryOverviewMetricsDataset() {
    }
    DeliveryOverviewMetricsDataset.getAttributeTypeMap = function () {
        return DeliveryOverviewMetricsDataset.attributeTypeMap;
    };
    DeliveryOverviewMetricsDataset.discriminator = undefined;
    DeliveryOverviewMetricsDataset.attributeTypeMap = [
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'string',
        },
        {
            name: 'appVersion',
            baseName: 'appVersion',
            type: 'string',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'string',
        },
        {
            name: 'discardReason',
            baseName: 'discardReason',
            type: 'string',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'series',
            baseName: 'series',
            type: 'Array<DeliveryOverviewMetricsDatapoint>',
        },
        {
            name: 'totalRetryCount',
            baseName: 'totalRetryCount',
            type: 'number',
        },
    ];
    return DeliveryOverviewMetricsDataset;
}());
exports.DeliveryOverviewMetricsDataset = DeliveryOverviewMetricsDataset;
//# sourceMappingURL=deliveryOverviewMetricsDataset.js.map