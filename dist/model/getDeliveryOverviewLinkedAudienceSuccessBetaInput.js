"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeliveryOverviewLinkedAudienceSuccessBetaInput = void 0;
var GetDeliveryOverviewLinkedAudienceSuccessBetaInput = (function () {
    function GetDeliveryOverviewLinkedAudienceSuccessBetaInput() {
    }
    GetDeliveryOverviewLinkedAudienceSuccessBetaInput.getAttributeTypeMap = function () {
        return GetDeliveryOverviewLinkedAudienceSuccessBetaInput.attributeTypeMap;
    };
    GetDeliveryOverviewLinkedAudienceSuccessBetaInput.discriminator = undefined;
    GetDeliveryOverviewLinkedAudienceSuccessBetaInput.attributeTypeMap = [
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
            type: 'GetDeliveryOverviewLinkedAudienceSuccessBetaInput.GranularityEnum',
        },
        {
            name: 'filter',
            baseName: 'filter',
            type: 'DeliveryOverviewAudienceFilterBy',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationInput',
        },
    ];
    return GetDeliveryOverviewLinkedAudienceSuccessBetaInput;
}());
exports.GetDeliveryOverviewLinkedAudienceSuccessBetaInput = GetDeliveryOverviewLinkedAudienceSuccessBetaInput;
(function (GetDeliveryOverviewLinkedAudienceSuccessBetaInput) {
    var GranularityEnum;
    (function (GranularityEnum) {
        GranularityEnum[GranularityEnum["DAY"] = 'DAY'] = "DAY";
        GranularityEnum[GranularityEnum["HOUR"] = 'HOUR'] = "HOUR";
        GranularityEnum[GranularityEnum["MINUTE"] = 'MINUTE'] = "MINUTE";
    })(GranularityEnum = GetDeliveryOverviewLinkedAudienceSuccessBetaInput.GranularityEnum || (GetDeliveryOverviewLinkedAudienceSuccessBetaInput.GranularityEnum = {}));
})(GetDeliveryOverviewLinkedAudienceSuccessBetaInput = exports.GetDeliveryOverviewLinkedAudienceSuccessBetaInput || (exports.GetDeliveryOverviewLinkedAudienceSuccessBetaInput = {}));
exports.GetDeliveryOverviewLinkedAudienceSuccessBetaInput = GetDeliveryOverviewLinkedAudienceSuccessBetaInput;
//# sourceMappingURL=getDeliveryOverviewLinkedAudienceSuccessBetaInput.js.map