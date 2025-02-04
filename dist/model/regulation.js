"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regulation = void 0;
var Regulation = (function () {
    function Regulation() {
    }
    Regulation.getAttributeTypeMap = function () {
        return Regulation.attributeTypeMap;
    };
    Regulation.discriminator = undefined;
    Regulation.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'overallStatus',
            baseName: 'overallStatus',
            type: 'Regulation.OverallStatusEnum',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'streamStatus',
            baseName: 'streamStatus',
            type: 'Array<StreamStatusV1>',
        },
    ];
    return Regulation;
}());
exports.Regulation = Regulation;
(function (Regulation) {
    var OverallStatusEnum;
    (function (OverallStatusEnum) {
        OverallStatusEnum[OverallStatusEnum["FAILED"] = 'FAILED'] = "FAILED";
        OverallStatusEnum[OverallStatusEnum["FINISHED"] = 'FINISHED'] = "FINISHED";
        OverallStatusEnum[OverallStatusEnum["INITIALIZED"] = 'INITIALIZED'] = "INITIALIZED";
        OverallStatusEnum[OverallStatusEnum["INVALID"] = 'INVALID'] = "INVALID";
        OverallStatusEnum[OverallStatusEnum["IN_PROGRESS"] = 'IN_PROGRESS'] = "IN_PROGRESS";
        OverallStatusEnum[OverallStatusEnum["NOT_SUPPORTED"] = 'NOT_SUPPORTED'] = "NOT_SUPPORTED";
        OverallStatusEnum[OverallStatusEnum["PARTIAL_SUCCESS"] = 'PARTIAL_SUCCESS'] = "PARTIAL_SUCCESS";
    })(OverallStatusEnum = Regulation.OverallStatusEnum || (Regulation.OverallStatusEnum = {}));
})(Regulation = exports.Regulation || (exports.Regulation = {}));
exports.Regulation = Regulation;
//# sourceMappingURL=regulation.js.map