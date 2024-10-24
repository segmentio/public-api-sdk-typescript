"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlScheduleDefinition = void 0;
var ReverseEtlScheduleDefinition = (function () {
    function ReverseEtlScheduleDefinition() {
    }
    ReverseEtlScheduleDefinition.getAttributeTypeMap = function () {
        return ReverseEtlScheduleDefinition.attributeTypeMap;
    };
    ReverseEtlScheduleDefinition.discriminator = undefined;
    ReverseEtlScheduleDefinition.attributeTypeMap = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'ReverseEtlScheduleDefinition.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
    ];
    return ReverseEtlScheduleDefinition;
}());
exports.ReverseEtlScheduleDefinition = ReverseEtlScheduleDefinition;
(function (ReverseEtlScheduleDefinition) {
    var StrategyEnum;
    (function (StrategyEnum) {
        StrategyEnum[StrategyEnum["CRON"] = 'CRON'] = "CRON";
        StrategyEnum[StrategyEnum["MANUAL"] = 'MANUAL'] = "MANUAL";
        StrategyEnum[StrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        StrategyEnum[StrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(StrategyEnum = ReverseEtlScheduleDefinition.StrategyEnum || (ReverseEtlScheduleDefinition.StrategyEnum = {}));
})(ReverseEtlScheduleDefinition = exports.ReverseEtlScheduleDefinition || (exports.ReverseEtlScheduleDefinition = {}));
exports.ReverseEtlScheduleDefinition = ReverseEtlScheduleDefinition;
//# sourceMappingURL=reverseEtlScheduleDefinition.js.map