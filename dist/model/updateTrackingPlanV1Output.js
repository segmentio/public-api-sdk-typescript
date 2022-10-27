"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrackingPlanV1Output = void 0;
var UpdateTrackingPlanV1Output = (function () {
    function UpdateTrackingPlanV1Output() {
    }
    UpdateTrackingPlanV1Output.getAttributeTypeMap = function () {
        return UpdateTrackingPlanV1Output.attributeTypeMap;
    };
    UpdateTrackingPlanV1Output.discriminator = undefined;
    UpdateTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateTrackingPlanV1Output.StatusEnum',
        },
    ];
    return UpdateTrackingPlanV1Output;
}());
exports.UpdateTrackingPlanV1Output = UpdateTrackingPlanV1Output;
(function (UpdateTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = UpdateTrackingPlanV1Output.StatusEnum || (UpdateTrackingPlanV1Output.StatusEnum = {}));
})(UpdateTrackingPlanV1Output = exports.UpdateTrackingPlanV1Output || (exports.UpdateTrackingPlanV1Output = {}));
exports.UpdateTrackingPlanV1Output = UpdateTrackingPlanV1Output;
//# sourceMappingURL=updateTrackingPlanV1Output.js.map