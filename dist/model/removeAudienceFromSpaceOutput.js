"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAudienceFromSpaceOutput = void 0;
var RemoveAudienceFromSpaceOutput = (function () {
    function RemoveAudienceFromSpaceOutput() {
    }
    RemoveAudienceFromSpaceOutput.getAttributeTypeMap = function () {
        return RemoveAudienceFromSpaceOutput.attributeTypeMap;
    };
    RemoveAudienceFromSpaceOutput.discriminator = undefined;
    RemoveAudienceFromSpaceOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveAudienceFromSpaceOutput.StatusEnum',
        },
    ];
    return RemoveAudienceFromSpaceOutput;
}());
exports.RemoveAudienceFromSpaceOutput = RemoveAudienceFromSpaceOutput;
(function (RemoveAudienceFromSpaceOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveAudienceFromSpaceOutput.StatusEnum || (RemoveAudienceFromSpaceOutput.StatusEnum = {}));
})(RemoveAudienceFromSpaceOutput = exports.RemoveAudienceFromSpaceOutput || (exports.RemoveAudienceFromSpaceOutput = {}));
exports.RemoveAudienceFromSpaceOutput = RemoveAudienceFromSpaceOutput;
//# sourceMappingURL=removeAudienceFromSpaceOutput.js.map