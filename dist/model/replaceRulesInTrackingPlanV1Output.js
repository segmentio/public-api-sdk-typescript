"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceRulesInTrackingPlanV1Output = void 0;
var ReplaceRulesInTrackingPlanV1Output = (function () {
    function ReplaceRulesInTrackingPlanV1Output() {
    }
    ReplaceRulesInTrackingPlanV1Output.getAttributeTypeMap = function () {
        return ReplaceRulesInTrackingPlanV1Output.attributeTypeMap;
    };
    ReplaceRulesInTrackingPlanV1Output.discriminator = undefined;
    ReplaceRulesInTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'ReplaceRulesInTrackingPlanV1Output.StatusEnum',
        },
    ];
    return ReplaceRulesInTrackingPlanV1Output;
}());
exports.ReplaceRulesInTrackingPlanV1Output = ReplaceRulesInTrackingPlanV1Output;
(function (ReplaceRulesInTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = ReplaceRulesInTrackingPlanV1Output.StatusEnum || (ReplaceRulesInTrackingPlanV1Output.StatusEnum = {}));
})(ReplaceRulesInTrackingPlanV1Output = exports.ReplaceRulesInTrackingPlanV1Output || (exports.ReplaceRulesInTrackingPlanV1Output = {}));
exports.ReplaceRulesInTrackingPlanV1Output = ReplaceRulesInTrackingPlanV1Output;
//# sourceMappingURL=replaceRulesInTrackingPlanV1Output.js.map