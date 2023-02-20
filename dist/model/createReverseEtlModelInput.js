"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReverseEtlModelInput = void 0;
var CreateReverseEtlModelInput = (function () {
    function CreateReverseEtlModelInput() {
    }
    CreateReverseEtlModelInput.getAttributeTypeMap = function () {
        return CreateReverseEtlModelInput.attributeTypeMap;
    };
    CreateReverseEtlModelInput.discriminator = undefined;
    CreateReverseEtlModelInput.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
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
            type: 'CreateReverseEtlModelInput.ScheduleStrategyEnum',
        },
        {
            name: 'scheduleConfig',
            baseName: 'scheduleConfig',
            type: 'any',
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
    return CreateReverseEtlModelInput;
}());
exports.CreateReverseEtlModelInput = CreateReverseEtlModelInput;
(function (CreateReverseEtlModelInput) {
    var ScheduleStrategyEnum;
    (function (ScheduleStrategyEnum) {
        ScheduleStrategyEnum[ScheduleStrategyEnum["MANUAL"] = 'MANUAL'] = "MANUAL";
        ScheduleStrategyEnum[ScheduleStrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        ScheduleStrategyEnum[ScheduleStrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(ScheduleStrategyEnum = CreateReverseEtlModelInput.ScheduleStrategyEnum || (CreateReverseEtlModelInput.ScheduleStrategyEnum = {}));
})(CreateReverseEtlModelInput = exports.CreateReverseEtlModelInput || (exports.CreateReverseEtlModelInput = {}));
exports.CreateReverseEtlModelInput = CreateReverseEtlModelInput;
//# sourceMappingURL=createReverseEtlModelInput.js.map