"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMetricsSummaryBeta = void 0;
var DeliveryMetricsSummaryBeta = (function () {
    function DeliveryMetricsSummaryBeta() {
    }
    DeliveryMetricsSummaryBeta.getAttributeTypeMap = function () {
        return DeliveryMetricsSummaryBeta.attributeTypeMap;
    };
    DeliveryMetricsSummaryBeta.discriminator = undefined;
    DeliveryMetricsSummaryBeta.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'destinationMetadataId',
            baseName: 'destinationMetadataId',
            type: 'string',
        },
        {
            name: 'metrics',
            baseName: 'metrics',
            type: 'Array<MetricBeta>',
        },
    ];
    return DeliveryMetricsSummaryBeta;
}());
exports.DeliveryMetricsSummaryBeta = DeliveryMetricsSummaryBeta;
//# sourceMappingURL=deliveryMetricsSummaryBeta.js.map