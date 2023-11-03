"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReverseEtlModelInput = void 0;
var UpdateReverseEtlModelInput = (function () {
    function UpdateReverseEtlModelInput() {
    }
    UpdateReverseEtlModelInput.getAttributeTypeMap = function () {
        return UpdateReverseEtlModelInput.attributeTypeMap;
    };
    UpdateReverseEtlModelInput.discriminator = undefined;
    UpdateReverseEtlModelInput.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'scheduleStrategy',
            baseName: 'scheduleStrategy',
            type: 'UpdateReverseEtlModelInput.ScheduleStrategyEnum',
        },
        {
            name: 'scheduleConfig',
            baseName: 'scheduleConfig',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'queryIdentifierColumn',
            baseName: 'queryIdentifierColumn',
            type: 'string',
        },
    ];
    return UpdateReverseEtlModelInput;
}());
exports.UpdateReverseEtlModelInput = UpdateReverseEtlModelInput;
(function (UpdateReverseEtlModelInput) {
    var ScheduleStrategyEnum;
    (function (ScheduleStrategyEnum) {
        ScheduleStrategyEnum[ScheduleStrategyEnum["MANUAL"] = 'MANUAL'] = "MANUAL";
        ScheduleStrategyEnum[ScheduleStrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        ScheduleStrategyEnum[ScheduleStrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(ScheduleStrategyEnum = UpdateReverseEtlModelInput.ScheduleStrategyEnum || (UpdateReverseEtlModelInput.ScheduleStrategyEnum = {}));
})(UpdateReverseEtlModelInput = exports.UpdateReverseEtlModelInput || (exports.UpdateReverseEtlModelInput = {}));
exports.UpdateReverseEtlModelInput = UpdateReverseEtlModelInput;
//# sourceMappingURL=updateReverseEtlModelInput.js.map