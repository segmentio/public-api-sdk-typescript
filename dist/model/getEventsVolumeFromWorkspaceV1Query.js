"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventsVolumeFromWorkspaceV1Query = void 0;
var GetEventsVolumeFromWorkspaceV1Query = (function () {
    function GetEventsVolumeFromWorkspaceV1Query() {
    }
    GetEventsVolumeFromWorkspaceV1Query.getAttributeTypeMap = function () {
        return GetEventsVolumeFromWorkspaceV1Query.attributeTypeMap;
    };
    GetEventsVolumeFromWorkspaceV1Query.discriminator = undefined;
    GetEventsVolumeFromWorkspaceV1Query.attributeTypeMap = [
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'granularity',
            baseName: 'granularity',
            type: 'GetEventsVolumeFromWorkspaceV1Query.GranularityEnum',
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
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'Array<string>',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'Array<string>',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'Array<string>',
        },
        {
            name: 'appVersion',
            baseName: 'appVersion',
            type: 'Array<string>',
        },
        {
            name: 'limit',
            baseName: 'limit',
            type: 'number',
        },
    ];
    return GetEventsVolumeFromWorkspaceV1Query;
}());
exports.GetEventsVolumeFromWorkspaceV1Query = GetEventsVolumeFromWorkspaceV1Query;
(function (GetEventsVolumeFromWorkspaceV1Query) {
    var GranularityEnum;
    (function (GranularityEnum) {
        GranularityEnum[GranularityEnum["day"] = 'day'] = "day";
        GranularityEnum[GranularityEnum["hour"] = 'hour'] = "hour";
        GranularityEnum[GranularityEnum["minute"] = 'minute'] = "minute";
    })(GranularityEnum = GetEventsVolumeFromWorkspaceV1Query.GranularityEnum || (GetEventsVolumeFromWorkspaceV1Query.GranularityEnum = {}));
})(GetEventsVolumeFromWorkspaceV1Query = exports.GetEventsVolumeFromWorkspaceV1Query || (exports.GetEventsVolumeFromWorkspaceV1Query = {}));
exports.GetEventsVolumeFromWorkspaceV1Query = GetEventsVolumeFromWorkspaceV1Query;
//# sourceMappingURL=getEventsVolumeFromWorkspaceV1Query.js.map