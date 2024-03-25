"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeliveryOverviewSourceMetricsBetaInput = void 0;
var GetDeliveryOverviewSourceMetricsBetaInput = (function () {
    function GetDeliveryOverviewSourceMetricsBetaInput() {
    }
    GetDeliveryOverviewSourceMetricsBetaInput.getAttributeTypeMap = function () {
        return GetDeliveryOverviewSourceMetricsBetaInput.attributeTypeMap;
    };
    GetDeliveryOverviewSourceMetricsBetaInput.discriminator = undefined;
    GetDeliveryOverviewSourceMetricsBetaInput.attributeTypeMap = [
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
            type: 'GetDeliveryOverviewSourceMetricsBetaInput.GranularityEnum',
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
    return GetDeliveryOverviewSourceMetricsBetaInput;
}());
exports.GetDeliveryOverviewSourceMetricsBetaInput = GetDeliveryOverviewSourceMetricsBetaInput;
(function (GetDeliveryOverviewSourceMetricsBetaInput) {
    var GranularityEnum;
    (function (GranularityEnum) {
        GranularityEnum[GranularityEnum["day"] = 'day'] = "day";
        GranularityEnum[GranularityEnum["hour"] = 'hour'] = "hour";
        GranularityEnum[GranularityEnum["minute"] = 'minute'] = "minute";
    })(GranularityEnum = GetDeliveryOverviewSourceMetricsBetaInput.GranularityEnum || (GetDeliveryOverviewSourceMetricsBetaInput.GranularityEnum = {}));
})(GetDeliveryOverviewSourceMetricsBetaInput = exports.GetDeliveryOverviewSourceMetricsBetaInput || (exports.GetDeliveryOverviewSourceMetricsBetaInput = {}));
exports.GetDeliveryOverviewSourceMetricsBetaInput = GetDeliveryOverviewSourceMetricsBetaInput;
//# sourceMappingURL=getDeliveryOverviewSourceMetricsBetaInput.js.map