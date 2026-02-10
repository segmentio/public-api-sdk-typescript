"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAudienceScheduleToAudienceInput = void 0;
var AddAudienceScheduleToAudienceInput = (function () {
    function AddAudienceScheduleToAudienceInput() {
    }
    AddAudienceScheduleToAudienceInput.getAttributeTypeMap = function () {
        return AddAudienceScheduleToAudienceInput.attributeTypeMap;
    };
    AddAudienceScheduleToAudienceInput.discriminator = undefined;
    AddAudienceScheduleToAudienceInput.attributeTypeMap = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'AddAudienceScheduleToAudienceInput.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
    ];
    return AddAudienceScheduleToAudienceInput;
}());
exports.AddAudienceScheduleToAudienceInput = AddAudienceScheduleToAudienceInput;
(function (AddAudienceScheduleToAudienceInput) {
    var StrategyEnum;
    (function (StrategyEnum) {
        StrategyEnum[StrategyEnum["PERIODIC"] = 'PERIODIC'] = "PERIODIC";
        StrategyEnum[StrategyEnum["SPECIFIC_DAYS"] = 'SPECIFIC_DAYS'] = "SPECIFIC_DAYS";
    })(StrategyEnum = AddAudienceScheduleToAudienceInput.StrategyEnum || (AddAudienceScheduleToAudienceInput.StrategyEnum = {}));
})(AddAudienceScheduleToAudienceInput = exports.AddAudienceScheduleToAudienceInput || (exports.AddAudienceScheduleToAudienceInput = {}));
exports.AddAudienceScheduleToAudienceInput = AddAudienceScheduleToAudienceInput;
//# sourceMappingURL=addAudienceScheduleToAudienceInput.js.map