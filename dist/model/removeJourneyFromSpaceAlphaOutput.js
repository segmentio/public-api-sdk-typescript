"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveJourneyFromSpaceAlphaOutput = void 0;
var RemoveJourneyFromSpaceAlphaOutput = (function () {
    function RemoveJourneyFromSpaceAlphaOutput() {
    }
    RemoveJourneyFromSpaceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveJourneyFromSpaceAlphaOutput.attributeTypeMap;
    };
    RemoveJourneyFromSpaceAlphaOutput.discriminator = undefined;
    RemoveJourneyFromSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveJourneyFromSpaceAlphaOutput.StatusEnum',
        },
    ];
    return RemoveJourneyFromSpaceAlphaOutput;
}());
exports.RemoveJourneyFromSpaceAlphaOutput = RemoveJourneyFromSpaceAlphaOutput;
(function (RemoveJourneyFromSpaceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveJourneyFromSpaceAlphaOutput.StatusEnum || (RemoveJourneyFromSpaceAlphaOutput.StatusEnum = {}));
})(RemoveJourneyFromSpaceAlphaOutput = exports.RemoveJourneyFromSpaceAlphaOutput || (exports.RemoveJourneyFromSpaceAlphaOutput = {}));
exports.RemoveJourneyFromSpaceAlphaOutput = RemoveJourneyFromSpaceAlphaOutput;
//# sourceMappingURL=removeJourneyFromSpaceAlphaOutput.js.map