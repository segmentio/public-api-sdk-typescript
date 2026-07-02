"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneySummary = void 0;
var JourneySummary = (function () {
    function JourneySummary() {
    }
    JourneySummary.getAttributeTypeMap = function () {
        return JourneySummary.attributeTypeMap;
    };
    JourneySummary.discriminator = undefined;
    JourneySummary.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'executionState',
            baseName: 'executionState',
            type: 'JourneySummary.ExecutionStateEnum',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];
    return JourneySummary;
}());
exports.JourneySummary = JourneySummary;
(function (JourneySummary) {
    var ExecutionStateEnum;
    (function (ExecutionStateEnum) {
        ExecutionStateEnum[ExecutionStateEnum["DRAFT"] = 'DRAFT'] = "DRAFT";
        ExecutionStateEnum[ExecutionStateEnum["PUBLISHED"] = 'PUBLISHED'] = "PUBLISHED";
    })(ExecutionStateEnum = JourneySummary.ExecutionStateEnum || (JourneySummary.ExecutionStateEnum = {}));
})(JourneySummary = exports.JourneySummary || (exports.JourneySummary = {}));
exports.JourneySummary = JourneySummary;
//# sourceMappingURL=journeySummary.js.map