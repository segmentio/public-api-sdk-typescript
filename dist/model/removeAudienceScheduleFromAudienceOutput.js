"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAudienceScheduleFromAudienceOutput = void 0;
var RemoveAudienceScheduleFromAudienceOutput = (function () {
    function RemoveAudienceScheduleFromAudienceOutput() {
    }
    RemoveAudienceScheduleFromAudienceOutput.getAttributeTypeMap = function () {
        return RemoveAudienceScheduleFromAudienceOutput.attributeTypeMap;
    };
    RemoveAudienceScheduleFromAudienceOutput.discriminator = undefined;
    RemoveAudienceScheduleFromAudienceOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveAudienceScheduleFromAudienceOutput.StatusEnum',
        },
    ];
    return RemoveAudienceScheduleFromAudienceOutput;
}());
exports.RemoveAudienceScheduleFromAudienceOutput = RemoveAudienceScheduleFromAudienceOutput;
(function (RemoveAudienceScheduleFromAudienceOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveAudienceScheduleFromAudienceOutput.StatusEnum || (RemoveAudienceScheduleFromAudienceOutput.StatusEnum = {}));
})(RemoveAudienceScheduleFromAudienceOutput = exports.RemoveAudienceScheduleFromAudienceOutput || (exports.RemoveAudienceScheduleFromAudienceOutput = {}));
exports.RemoveAudienceScheduleFromAudienceOutput = RemoveAudienceScheduleFromAudienceOutput;
//# sourceMappingURL=removeAudienceScheduleFromAudienceOutput.js.map