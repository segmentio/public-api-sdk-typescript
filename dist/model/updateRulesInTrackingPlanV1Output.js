"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesInTrackingPlanV1Output = void 0;
var UpdateRulesInTrackingPlanV1Output = (function () {
    function UpdateRulesInTrackingPlanV1Output() {
    }
    UpdateRulesInTrackingPlanV1Output.getAttributeTypeMap = function () {
        return UpdateRulesInTrackingPlanV1Output.attributeTypeMap;
    };
    UpdateRulesInTrackingPlanV1Output.discriminator = undefined;
    UpdateRulesInTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateRulesInTrackingPlanV1Output.StatusEnum',
        },
    ];
    return UpdateRulesInTrackingPlanV1Output;
}());
exports.UpdateRulesInTrackingPlanV1Output = UpdateRulesInTrackingPlanV1Output;
(function (UpdateRulesInTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = UpdateRulesInTrackingPlanV1Output.StatusEnum || (UpdateRulesInTrackingPlanV1Output.StatusEnum = {}));
})(UpdateRulesInTrackingPlanV1Output = exports.UpdateRulesInTrackingPlanV1Output || (exports.UpdateRulesInTrackingPlanV1Output = {}));
exports.UpdateRulesInTrackingPlanV1Output = UpdateRulesInTrackingPlanV1Output;
//# sourceMappingURL=updateRulesInTrackingPlanV1Output.js.map