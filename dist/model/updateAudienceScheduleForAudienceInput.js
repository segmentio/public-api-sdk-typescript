"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudienceScheduleForAudienceInput = void 0;
var UpdateAudienceScheduleForAudienceInput = (function () {
    function UpdateAudienceScheduleForAudienceInput() {
    }
    UpdateAudienceScheduleForAudienceInput.getAttributeTypeMap = function () {
        return UpdateAudienceScheduleForAudienceInput.attributeTypeMap;
    };
    UpdateAudienceScheduleForAudienceInput.discriminator = undefined;
    UpdateAudienceScheduleForAudienceInput.attributeTypeMap = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'UpdateAudienceScheduleForAudienceInput.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
    ];
    return UpdateAudienceScheduleForAudienceInput;
}());
exports.UpdateAudienceScheduleForAudienceInput = UpdateAudienceScheduleForAudienceInput;
(function (UpdateAudienceScheduleForAudienceInput) {
    var StrategyEnum;
    (function (StrategyEnum) {
        StrategyEnum[StrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        StrategyEnum[StrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(StrategyEnum = UpdateAudienceScheduleForAudienceInput.StrategyEnum || (UpdateAudienceScheduleForAudienceInput.StrategyEnum = {}));
})(UpdateAudienceScheduleForAudienceInput = exports.UpdateAudienceScheduleForAudienceInput || (exports.UpdateAudienceScheduleForAudienceInput = {}));
exports.UpdateAudienceScheduleForAudienceInput = UpdateAudienceScheduleForAudienceInput;
//# sourceMappingURL=updateAudienceScheduleForAudienceInput.js.map