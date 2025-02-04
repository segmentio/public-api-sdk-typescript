"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationStatusV1 = void 0;
var DestinationStatusV1 = (function () {
    function DestinationStatusV1() {
    }
    DestinationStatusV1.getAttributeTypeMap = function () {
        return DestinationStatusV1.attributeTypeMap;
    };
    DestinationStatusV1.discriminator = undefined;
    DestinationStatusV1.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'DestinationStatusV1.StatusEnum',
        },
        {
            name: 'errString',
            baseName: 'errString',
            type: 'string',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
    ];
    return DestinationStatusV1;
}());
exports.DestinationStatusV1 = DestinationStatusV1;
(function (DestinationStatusV1) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
        StatusEnum[StatusEnum["FINISHED"] = 'FINISHED'] = "FINISHED";
        StatusEnum[StatusEnum["INITIALIZED"] = 'INITIALIZED'] = "INITIALIZED";
        StatusEnum[StatusEnum["INVALID"] = 'INVALID'] = "INVALID";
        StatusEnum[StatusEnum["IN_PROGRESS"] = 'IN_PROGRESS'] = "IN_PROGRESS";
        StatusEnum[StatusEnum["NOT_SUPPORTED"] = 'NOT_SUPPORTED'] = "NOT_SUPPORTED";
        StatusEnum[StatusEnum["PARTIAL_SUCCESS"] = 'PARTIAL_SUCCESS'] = "PARTIAL_SUCCESS";
    })(StatusEnum = DestinationStatusV1.StatusEnum || (DestinationStatusV1.StatusEnum = {}));
})(DestinationStatusV1 = exports.DestinationStatusV1 || (exports.DestinationStatusV1 = {}));
exports.DestinationStatusV1 = DestinationStatusV1;
//# sourceMappingURL=destinationStatusV1.js.map