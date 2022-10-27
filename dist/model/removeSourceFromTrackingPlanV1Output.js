"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSourceFromTrackingPlanV1Output = void 0;
var RemoveSourceFromTrackingPlanV1Output = (function () {
    function RemoveSourceFromTrackingPlanV1Output() {
    }
    RemoveSourceFromTrackingPlanV1Output.getAttributeTypeMap = function () {
        return RemoveSourceFromTrackingPlanV1Output.attributeTypeMap;
    };
    RemoveSourceFromTrackingPlanV1Output.discriminator = undefined;
    RemoveSourceFromTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveSourceFromTrackingPlanV1Output.StatusEnum',
        },
    ];
    return RemoveSourceFromTrackingPlanV1Output;
}());
exports.RemoveSourceFromTrackingPlanV1Output = RemoveSourceFromTrackingPlanV1Output;
(function (RemoveSourceFromTrackingPlanV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveSourceFromTrackingPlanV1Output.StatusEnum || (RemoveSourceFromTrackingPlanV1Output.StatusEnum = {}));
})(RemoveSourceFromTrackingPlanV1Output = exports.RemoveSourceFromTrackingPlanV1Output || (exports.RemoveSourceFromTrackingPlanV1Output = {}));
exports.RemoveSourceFromTrackingPlanV1Output = RemoveSourceFromTrackingPlanV1Output;
//# sourceMappingURL=removeSourceFromTrackingPlanV1Output.js.map