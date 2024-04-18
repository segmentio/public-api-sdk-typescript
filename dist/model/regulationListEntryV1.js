"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegulationListEntryV1 = void 0;
var RegulationListEntryV1 = (function () {
    function RegulationListEntryV1() {
    }
    RegulationListEntryV1.getAttributeTypeMap = function () {
        return RegulationListEntryV1.attributeTypeMap;
    };
    RegulationListEntryV1.discriminator = undefined;
    RegulationListEntryV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'string',
        },
        {
            name: 'subjects',
            baseName: 'subjects',
            type: 'Array<string>',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'RegulationListEntryV1.StatusEnum',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'regulationType',
            baseName: 'regulationType',
            type: 'RegulationListEntryV1.RegulationTypeEnum',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
    ];
    return RegulationListEntryV1;
}());
exports.RegulationListEntryV1 = RegulationListEntryV1;
(function (RegulationListEntryV1) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
        StatusEnum[StatusEnum["FINISHED"] = 'FINISHED'] = "FINISHED";
        StatusEnum[StatusEnum["INITIALIZED"] = 'INITIALIZED'] = "INITIALIZED";
        StatusEnum[StatusEnum["INVALID"] = 'INVALID'] = "INVALID";
        StatusEnum[StatusEnum["NOT_SUPPORTED"] = 'NOT_SUPPORTED'] = "NOT_SUPPORTED";
        StatusEnum[StatusEnum["PARTIAL_SUCCESS"] = 'PARTIAL_SUCCESS'] = "PARTIAL_SUCCESS";
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
    })(StatusEnum = RegulationListEntryV1.StatusEnum || (RegulationListEntryV1.StatusEnum = {}));
    var RegulationTypeEnum;
    (function (RegulationTypeEnum) {
        RegulationTypeEnum[RegulationTypeEnum["DELETE_INTERNAL"] = 'DELETE_INTERNAL'] = "DELETE_INTERNAL";
        RegulationTypeEnum[RegulationTypeEnum["DELETE_ONLY"] = 'DELETE_ONLY'] = "DELETE_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_ONLY"] = 'SUPPRESS_ONLY'] = "SUPPRESS_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_WITH_DELETE"] = 'SUPPRESS_WITH_DELETE'] = "SUPPRESS_WITH_DELETE";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_WITH_DELETE_INTERNAL"] = 'SUPPRESS_WITH_DELETE_INTERNAL'] = "SUPPRESS_WITH_DELETE_INTERNAL";
        RegulationTypeEnum[RegulationTypeEnum["UNSUPPRESS"] = 'UNSUPPRESS'] = "UNSUPPRESS";
    })(RegulationTypeEnum = RegulationListEntryV1.RegulationTypeEnum || (RegulationListEntryV1.RegulationTypeEnum = {}));
})(RegulationListEntryV1 = exports.RegulationListEntryV1 || (exports.RegulationListEntryV1 = {}));
exports.RegulationListEntryV1 = RegulationListEntryV1;
//# sourceMappingURL=regulationListEntryV1.js.map