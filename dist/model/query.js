"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var Query = (function () {
    function Query() {
    }
    Query.getAttributeTypeMap = function () {
        return Query.attributeTypeMap;
    };
    Query.discriminator = undefined;
    Query.attributeTypeMap = [
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'granularity',
            baseName: 'granularity',
            type: 'Query.GranularityEnum',
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
    return Query;
}());
exports.Query = Query;
(function (Query) {
    var GranularityEnum;
    (function (GranularityEnum) {
        GranularityEnum[GranularityEnum["DAY"] = 'DAY'] = "DAY";
        GranularityEnum[GranularityEnum["HOUR"] = 'HOUR'] = "HOUR";
        GranularityEnum[GranularityEnum["MINUTE"] = 'MINUTE'] = "MINUTE";
    })(GranularityEnum = Query.GranularityEnum || (Query.GranularityEnum = {}));
})(Query = exports.Query || (exports.Query = {}));
exports.Query = Query;
//# sourceMappingURL=query.js.map