"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeliveryOverviewDestMetricsBetaInput = void 0;
var GetDeliveryOverviewDestMetricsBetaInput = (function () {
    function GetDeliveryOverviewDestMetricsBetaInput() {
    }
    GetDeliveryOverviewDestMetricsBetaInput.getAttributeTypeMap = function () {
        return GetDeliveryOverviewDestMetricsBetaInput.attributeTypeMap;
    };
    GetDeliveryOverviewDestMetricsBetaInput.discriminator = undefined;
    GetDeliveryOverviewDestMetricsBetaInput.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'destinationConfigId',
            baseName: 'destinationConfigId',
            type: 'string',
        },
        {
            name: 'startTime',
            baseName: 'startTime',
            type: 'string',
        },
        {
            name: 'endTime',
            baseName: 'endTime',
            type: 'string',
        },
        {
            name: 'groupBy',
            baseName: 'groupBy',
            type: 'Array<string>',
        },
        {
            name: 'granularity',
            baseName: 'granularity',
            type: 'GetDeliveryOverviewDestMetricsBetaInput.GranularityEnum',
        },
        {
            name: 'filter',
            baseName: 'filter',
            type: 'DeliveryOverviewFilterBy',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationInput',
        },
        {
            name: 'subscriptionId',
            baseName: 'subscriptionId',
            type: 'string',
        },
    ];
    return GetDeliveryOverviewDestMetricsBetaInput;
}());
exports.GetDeliveryOverviewDestMetricsBetaInput = GetDeliveryOverviewDestMetricsBetaInput;
(function (GetDeliveryOverviewDestMetricsBetaInput) {
    var GranularityEnum;
    (function (GranularityEnum) {
        GranularityEnum[GranularityEnum["day"] = 'day'] = "day";
        GranularityEnum[GranularityEnum["hour"] = 'hour'] = "hour";
        GranularityEnum[GranularityEnum["minute"] = 'minute'] = "minute";
    })(GranularityEnum = GetDeliveryOverviewDestMetricsBetaInput.GranularityEnum || (GetDeliveryOverviewDestMetricsBetaInput.GranularityEnum = {}));
})(GetDeliveryOverviewDestMetricsBetaInput = exports.GetDeliveryOverviewDestMetricsBetaInput || (exports.GetDeliveryOverviewDestMetricsBetaInput = {}));
exports.GetDeliveryOverviewDestMetricsBetaInput = GetDeliveryOverviewDestMetricsBetaInput;
//# sourceMappingURL=getDeliveryOverviewDestMetricsBetaInput.js.map