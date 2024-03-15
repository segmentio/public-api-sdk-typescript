"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOverviewMetricsDatapoint = void 0;
var DeliveryOverviewMetricsDatapoint = (function () {
    function DeliveryOverviewMetricsDatapoint() {
    }
    DeliveryOverviewMetricsDatapoint.getAttributeTypeMap = function () {
        return DeliveryOverviewMetricsDatapoint.attributeTypeMap;
    };
    DeliveryOverviewMetricsDatapoint.discriminator = undefined;
    DeliveryOverviewMetricsDatapoint.attributeTypeMap = [
        {
            name: 'time',
            baseName: 'time',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'retryCount',
            baseName: 'retryCount',
            type: 'number',
        },
    ];
    return DeliveryOverviewMetricsDatapoint;
}());
exports.DeliveryOverviewMetricsDatapoint = DeliveryOverviewMetricsDatapoint;
//# sourceMappingURL=deliveryOverviewMetricsDatapoint.js.map