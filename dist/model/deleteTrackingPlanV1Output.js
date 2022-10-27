"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTrackingPlanV1Output = void 0;
var DeleteTrackingPlanV1Output = (function () {
    function DeleteTrackingPlanV1Output() {
    }
    DeleteTrackingPlanV1Output.getAttributeTypeMap = function () {
        return DeleteTrackingPlanV1Output.attributeTypeMap;
    };
    DeleteTrackingPlanV1Output.discriminator = undefined;
    DeleteTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteTrackingPlanV1Output.StatusEnum',
        },
    ];
    return DeleteTrackingPlanV1Output;
}());
exports.DeleteTrackingPlanV1Output = DeleteTrackingPlanV1Output;
(function (DeleteTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteTrackingPlanV1Output.StatusEnum || (DeleteTrackingPlanV1Output.StatusEnum = {}));
})(DeleteTrackingPlanV1Output = exports.DeleteTrackingPlanV1Output || (exports.DeleteTrackingPlanV1Output = {}));
exports.DeleteTrackingPlanV1Output = DeleteTrackingPlanV1Output;
//# sourceMappingURL=deleteTrackingPlanV1Output.js.map