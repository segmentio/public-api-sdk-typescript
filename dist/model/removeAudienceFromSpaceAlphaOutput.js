"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAudienceFromSpaceAlphaOutput = void 0;
var RemoveAudienceFromSpaceAlphaOutput = (function () {
    function RemoveAudienceFromSpaceAlphaOutput() {
    }
    RemoveAudienceFromSpaceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveAudienceFromSpaceAlphaOutput.attributeTypeMap;
    };
    RemoveAudienceFromSpaceAlphaOutput.discriminator = undefined;
    RemoveAudienceFromSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveAudienceFromSpaceAlphaOutput.StatusEnum',
        },
    ];
    return RemoveAudienceFromSpaceAlphaOutput;
}());
exports.RemoveAudienceFromSpaceAlphaOutput = RemoveAudienceFromSpaceAlphaOutput;
(function (RemoveAudienceFromSpaceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveAudienceFromSpaceAlphaOutput.StatusEnum || (RemoveAudienceFromSpaceAlphaOutput.StatusEnum = {}));
})(RemoveAudienceFromSpaceAlphaOutput = exports.RemoveAudienceFromSpaceAlphaOutput || (exports.RemoveAudienceFromSpaceAlphaOutput = {}));
exports.RemoveAudienceFromSpaceAlphaOutput = RemoveAudienceFromSpaceAlphaOutput;
//# sourceMappingURL=removeAudienceFromSpaceAlphaOutput.js.map