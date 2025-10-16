"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAudienceScheduleToAudienceAlphaInput = void 0;
var AddAudienceScheduleToAudienceAlphaInput = (function () {
    function AddAudienceScheduleToAudienceAlphaInput() {
    }
    AddAudienceScheduleToAudienceAlphaInput.getAttributeTypeMap = function () {
        return AddAudienceScheduleToAudienceAlphaInput.attributeTypeMap;
    };
    AddAudienceScheduleToAudienceAlphaInput.discriminator = undefined;
    AddAudienceScheduleToAudienceAlphaInput.attributeTypeMap = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'AddAudienceScheduleToAudienceAlphaInput.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
    ];
    return AddAudienceScheduleToAudienceAlphaInput;
}());
exports.AddAudienceScheduleToAudienceAlphaInput = AddAudienceScheduleToAudienceAlphaInput;
(function (AddAudienceScheduleToAudienceAlphaInput) {
    var StrategyEnum;
    (function (StrategyEnum) {
        StrategyEnum[StrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        StrategyEnum[StrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(StrategyEnum = AddAudienceScheduleToAudienceAlphaInput.StrategyEnum || (AddAudienceScheduleToAudienceAlphaInput.StrategyEnum = {}));
})(AddAudienceScheduleToAudienceAlphaInput = exports.AddAudienceScheduleToAudienceAlphaInput || (exports.AddAudienceScheduleToAudienceAlphaInput = {}));
exports.AddAudienceScheduleToAudienceAlphaInput = AddAudienceScheduleToAudienceAlphaInput;
//# sourceMappingURL=addAudienceScheduleToAudienceAlphaInput.js.map