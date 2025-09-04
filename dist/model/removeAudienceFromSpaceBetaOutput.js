"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAudienceFromSpaceBetaOutput = void 0;
var RemoveAudienceFromSpaceBetaOutput = (function () {
    function RemoveAudienceFromSpaceBetaOutput() {
    }
    RemoveAudienceFromSpaceBetaOutput.getAttributeTypeMap = function () {
        return RemoveAudienceFromSpaceBetaOutput.attributeTypeMap;
    };
    RemoveAudienceFromSpaceBetaOutput.discriminator = undefined;
    RemoveAudienceFromSpaceBetaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveAudienceFromSpaceBetaOutput.StatusEnum',
        },
    ];
    return RemoveAudienceFromSpaceBetaOutput;
}());
exports.RemoveAudienceFromSpaceBetaOutput = RemoveAudienceFromSpaceBetaOutput;
(function (RemoveAudienceFromSpaceBetaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveAudienceFromSpaceBetaOutput.StatusEnum || (RemoveAudienceFromSpaceBetaOutput.StatusEnum = {}));
})(RemoveAudienceFromSpaceBetaOutput = exports.RemoveAudienceFromSpaceBetaOutput || (exports.RemoveAudienceFromSpaceBetaOutput = {}));
exports.RemoveAudienceFromSpaceBetaOutput = RemoveAudienceFromSpaceBetaOutput;
//# sourceMappingURL=removeAudienceFromSpaceBetaOutput.js.map