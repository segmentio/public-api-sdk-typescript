"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMetricsSummary = void 0;
var DeliveryMetricsSummary = (function () {
    function DeliveryMetricsSummary() {
    }
    DeliveryMetricsSummary.getAttributeTypeMap = function () {
        return DeliveryMetricsSummary.attributeTypeMap;
    };
    DeliveryMetricsSummary.discriminator = undefined;
    DeliveryMetricsSummary.attributeTypeMap = [
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
    return DeliveryMetricsSummary;
}());
exports.DeliveryMetricsSummary = DeliveryMetricsSummary;
//# sourceMappingURL=deliveryMetricsSummary.js.map