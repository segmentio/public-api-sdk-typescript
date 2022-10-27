"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSourceToTrackingPlanV1Output = void 0;
var AddSourceToTrackingPlanV1Output = (function () {
    function AddSourceToTrackingPlanV1Output() {
    }
    AddSourceToTrackingPlanV1Output.getAttributeTypeMap = function () {
        return AddSourceToTrackingPlanV1Output.attributeTypeMap;
    };
    AddSourceToTrackingPlanV1Output.discriminator = undefined;
    AddSourceToTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'AddSourceToTrackingPlanV1Output.StatusEnum',
        },
    ];
    return AddSourceToTrackingPlanV1Output;
}());
exports.AddSourceToTrackingPlanV1Output = AddSourceToTrackingPlanV1Output;
(function (AddSourceToTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = AddSourceToTrackingPlanV1Output.StatusEnum || (AddSourceToTrackingPlanV1Output.StatusEnum = {}));
})(AddSourceToTrackingPlanV1Output = exports.AddSourceToTrackingPlanV1Output || (exports.AddSourceToTrackingPlanV1Output = {}));
exports.AddSourceToTrackingPlanV1Output = AddSourceToTrackingPlanV1Output;
//# sourceMappingURL=addSourceToTrackingPlanV1Output.js.map