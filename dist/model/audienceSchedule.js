"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceSchedule = void 0;
var AudienceSchedule = (function () {
    function AudienceSchedule() {
    }
    AudienceSchedule.getAttributeTypeMap = function () {
        return AudienceSchedule.attributeTypeMap;
    };
    AudienceSchedule.discriminator = undefined;
    AudienceSchedule.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'AudienceSchedule.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'nextExecution',
            baseName: 'nextExecution',
            type: 'string',
        },
    ];
    return AudienceSchedule;
}());
exports.AudienceSchedule = AudienceSchedule;
(function (AudienceSchedule) {
    var StrategyEnum;
    (function (StrategyEnum) {
        StrategyEnum[StrategyEnum["MANUAL"] = 'MANUAL'] = "MANUAL";
        StrategyEnum[StrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        StrategyEnum[StrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(StrategyEnum = AudienceSchedule.StrategyEnum || (AudienceSchedule.StrategyEnum = {}));
})(AudienceSchedule = exports.AudienceSchedule || (exports.AudienceSchedule = {}));
exports.AudienceSchedule = AudienceSchedule;
//# sourceMappingURL=audienceSchedule.js.map