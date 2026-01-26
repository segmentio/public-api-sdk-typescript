"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveDestinationFromAudienceAlphaOutput = void 0;
var RemoveDestinationFromAudienceAlphaOutput = (function () {
    function RemoveDestinationFromAudienceAlphaOutput() {
    }
    RemoveDestinationFromAudienceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveDestinationFromAudienceAlphaOutput.attributeTypeMap;
    };
    RemoveDestinationFromAudienceAlphaOutput.discriminator = undefined;
    RemoveDestinationFromAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveDestinationFromAudienceAlphaOutput.StatusEnum',
        },
        {
            name: 'activationIds',
            baseName: 'activationIds',
            type: 'Array<string>',
        },
    ];
    return RemoveDestinationFromAudienceAlphaOutput;
}());
exports.RemoveDestinationFromAudienceAlphaOutput = RemoveDestinationFromAudienceAlphaOutput;
(function (RemoveDestinationFromAudienceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveDestinationFromAudienceAlphaOutput.StatusEnum || (RemoveDestinationFromAudienceAlphaOutput.StatusEnum = {}));
})(RemoveDestinationFromAudienceAlphaOutput = exports.RemoveDestinationFromAudienceAlphaOutput || (exports.RemoveDestinationFromAudienceAlphaOutput = {}));
exports.RemoveDestinationFromAudienceAlphaOutput = RemoveDestinationFromAudienceAlphaOutput;
//# sourceMappingURL=removeDestinationFromAudienceAlphaOutput.js.map