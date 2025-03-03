"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusForJourneyAlphaInput = void 0;
var UpdateStatusForJourneyAlphaInput = (function () {
    function UpdateStatusForJourneyAlphaInput() {
    }
    UpdateStatusForJourneyAlphaInput.getAttributeTypeMap = function () {
        return UpdateStatusForJourneyAlphaInput.attributeTypeMap;
    };
    UpdateStatusForJourneyAlphaInput.discriminator = undefined;
    UpdateStatusForJourneyAlphaInput.attributeTypeMap = [
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
        {
            name: 'action',
            baseName: 'action',
            type: 'UpdateStatusForJourneyAlphaInput.ActionEnum',
        },
    ];
    return UpdateStatusForJourneyAlphaInput;
}());
exports.UpdateStatusForJourneyAlphaInput = UpdateStatusForJourneyAlphaInput;
(function (UpdateStatusForJourneyAlphaInput) {
    var ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["ARCHIVE"] = 'ARCHIVE'] = "ARCHIVE";
        ActionEnum[ActionEnum["PAUSE_ENTRY"] = 'PAUSE_ENTRY'] = "PAUSE_ENTRY";
        ActionEnum[ActionEnum["PUBLISH"] = 'PUBLISH'] = "PUBLISH";
    })(ActionEnum = UpdateStatusForJourneyAlphaInput.ActionEnum || (UpdateStatusForJourneyAlphaInput.ActionEnum = {}));
})(UpdateStatusForJourneyAlphaInput = exports.UpdateStatusForJourneyAlphaInput || (exports.UpdateStatusForJourneyAlphaInput = {}));
exports.UpdateStatusForJourneyAlphaInput = UpdateStatusForJourneyAlphaInput;
//# sourceMappingURL=updateStatusForJourneyAlphaInput.js.map