"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudienceScheduleForAudienceAlphaInput = void 0;
var UpdateAudienceScheduleForAudienceAlphaInput = (function () {
    function UpdateAudienceScheduleForAudienceAlphaInput() {
    }
    UpdateAudienceScheduleForAudienceAlphaInput.getAttributeTypeMap = function () {
        return UpdateAudienceScheduleForAudienceAlphaInput.attributeTypeMap;
    };
    UpdateAudienceScheduleForAudienceAlphaInput.discriminator = undefined;
    UpdateAudienceScheduleForAudienceAlphaInput.attributeTypeMap = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'UpdateAudienceScheduleForAudienceAlphaInput.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
    ];
    return UpdateAudienceScheduleForAudienceAlphaInput;
}());
exports.UpdateAudienceScheduleForAudienceAlphaInput = UpdateAudienceScheduleForAudienceAlphaInput;
(function (UpdateAudienceScheduleForAudienceAlphaInput) {
    var StrategyEnum;
    (function (StrategyEnum) {
        StrategyEnum[StrategyEnum["MANUAL"] = 'MANUAL'] = "MANUAL";
        StrategyEnum[StrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        StrategyEnum[StrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(StrategyEnum = UpdateAudienceScheduleForAudienceAlphaInput.StrategyEnum || (UpdateAudienceScheduleForAudienceAlphaInput.StrategyEnum = {}));
})(UpdateAudienceScheduleForAudienceAlphaInput = exports.UpdateAudienceScheduleForAudienceAlphaInput || (exports.UpdateAudienceScheduleForAudienceAlphaInput = {}));
exports.UpdateAudienceScheduleForAudienceAlphaInput = UpdateAudienceScheduleForAudienceAlphaInput;
//# sourceMappingURL=updateAudienceScheduleForAudienceAlphaInput.js.map