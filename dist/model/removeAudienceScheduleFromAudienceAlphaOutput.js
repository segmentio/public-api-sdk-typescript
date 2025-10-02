"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAudienceScheduleFromAudienceAlphaOutput = void 0;
var RemoveAudienceScheduleFromAudienceAlphaOutput = (function () {
    function RemoveAudienceScheduleFromAudienceAlphaOutput() {
    }
    RemoveAudienceScheduleFromAudienceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveAudienceScheduleFromAudienceAlphaOutput.attributeTypeMap;
    };
    RemoveAudienceScheduleFromAudienceAlphaOutput.discriminator = undefined;
    RemoveAudienceScheduleFromAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveAudienceScheduleFromAudienceAlphaOutput.StatusEnum',
        },
    ];
    return RemoveAudienceScheduleFromAudienceAlphaOutput;
}());
exports.RemoveAudienceScheduleFromAudienceAlphaOutput = RemoveAudienceScheduleFromAudienceAlphaOutput;
(function (RemoveAudienceScheduleFromAudienceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveAudienceScheduleFromAudienceAlphaOutput.StatusEnum || (RemoveAudienceScheduleFromAudienceAlphaOutput.StatusEnum = {}));
})(RemoveAudienceScheduleFromAudienceAlphaOutput = exports.RemoveAudienceScheduleFromAudienceAlphaOutput || (exports.RemoveAudienceScheduleFromAudienceAlphaOutput = {}));
exports.RemoveAudienceScheduleFromAudienceAlphaOutput = RemoveAudienceScheduleFromAudienceAlphaOutput;
//# sourceMappingURL=removeAudienceScheduleFromAudienceAlphaOutput.js.map