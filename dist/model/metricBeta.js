"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBeta = void 0;
var MetricBeta = (function () {
    function MetricBeta() {
    }
    MetricBeta.getAttributeTypeMap = function () {
        return MetricBeta.attributeTypeMap;
    };
    MetricBeta.discriminator = undefined;
    MetricBeta.attributeTypeMap = [
        {
            name: 'metricName',
            baseName: 'metricName',
            type: 'string',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'breakdown',
            baseName: 'breakdown',
            type: 'Array<BreakdownBeta>',
        },
    ];
    return MetricBeta;
}());
exports.MetricBeta = MetricBeta;
//# sourceMappingURL=metricBeta.js.map