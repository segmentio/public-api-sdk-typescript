"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusForJourneyAlphaOutput = void 0;
var UpdateStatusForJourneyAlphaOutput = (function () {
    function UpdateStatusForJourneyAlphaOutput() {
    }
    UpdateStatusForJourneyAlphaOutput.getAttributeTypeMap = function () {
        return UpdateStatusForJourneyAlphaOutput.attributeTypeMap;
    };
    UpdateStatusForJourneyAlphaOutput.discriminator = undefined;
    UpdateStatusForJourneyAlphaOutput.attributeTypeMap = [
        {
            name: 'containerId',
            baseName: 'containerId',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateStatusForJourneyAlphaOutput.StatusEnum',
        },
    ];
    return UpdateStatusForJourneyAlphaOutput;
}());
exports.UpdateStatusForJourneyAlphaOutput = UpdateStatusForJourneyAlphaOutput;
(function (UpdateStatusForJourneyAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ARCHIVED"] = 'ARCHIVED'] = "ARCHIVED";
        StatusEnum[StatusEnum["ENTRY_PAUSED"] = 'ENTRY_PAUSED'] = "ENTRY_PAUSED";
        StatusEnum[StatusEnum["PUBLISHED"] = 'PUBLISHED'] = "PUBLISHED";
    })(StatusEnum = UpdateStatusForJourneyAlphaOutput.StatusEnum || (UpdateStatusForJourneyAlphaOutput.StatusEnum = {}));
})(UpdateStatusForJourneyAlphaOutput = exports.UpdateStatusForJourneyAlphaOutput || (exports.UpdateStatusForJourneyAlphaOutput = {}));
exports.UpdateStatusForJourneyAlphaOutput = UpdateStatusForJourneyAlphaOutput;
//# sourceMappingURL=updateStatusForJourneyAlphaOutput.js.map