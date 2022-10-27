"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakdownBeta = void 0;
var BreakdownBeta = (function () {
    function BreakdownBeta() {
    }
    BreakdownBeta.getAttributeTypeMap = function () {
        return BreakdownBeta.attributeTypeMap;
    };
    BreakdownBeta.discriminator = undefined;
    BreakdownBeta.attributeTypeMap = [
        {
            name: 'metricName',
            baseName: 'metricName',
            type: 'string',
        },
        {
            name: 'value',
            baseName: 'value',
            type: 'number',
        },
    ];
    return BreakdownBeta;
}());
exports.BreakdownBeta = BreakdownBeta;
//# sourceMappingURL=breakdownBeta.js.map