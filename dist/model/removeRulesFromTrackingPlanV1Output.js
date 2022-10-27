"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRulesFromTrackingPlanV1Output = void 0;
var RemoveRulesFromTrackingPlanV1Output = (function () {
    function RemoveRulesFromTrackingPlanV1Output() {
    }
    RemoveRulesFromTrackingPlanV1Output.getAttributeTypeMap = function () {
        return RemoveRulesFromTrackingPlanV1Output.attributeTypeMap;
    };
    RemoveRulesFromTrackingPlanV1Output.discriminator = undefined;
    RemoveRulesFromTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveRulesFromTrackingPlanV1Output.StatusEnum',
        },
    ];
    return RemoveRulesFromTrackingPlanV1Output;
}());
exports.RemoveRulesFromTrackingPlanV1Output = RemoveRulesFromTrackingPlanV1Output;
(function (RemoveRulesFromTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveRulesFromTrackingPlanV1Output.StatusEnum || (RemoveRulesFromTrackingPlanV1Output.StatusEnum = {}));
})(RemoveRulesFromTrackingPlanV1Output = exports.RemoveRulesFromTrackingPlanV1Output || (exports.RemoveRulesFromTrackingPlanV1Output = {}));
exports.RemoveRulesFromTrackingPlanV1Output = RemoveRulesFromTrackingPlanV1Output;
//# sourceMappingURL=removeRulesFromTrackingPlanV1Output.js.map