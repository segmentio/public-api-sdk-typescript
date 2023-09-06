"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveComputedTraitFromSpaceAlphaOutput = void 0;
var RemoveComputedTraitFromSpaceAlphaOutput = (function () {
    function RemoveComputedTraitFromSpaceAlphaOutput() {
    }
    RemoveComputedTraitFromSpaceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveComputedTraitFromSpaceAlphaOutput.attributeTypeMap;
    };
    RemoveComputedTraitFromSpaceAlphaOutput.discriminator = undefined;
    RemoveComputedTraitFromSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveComputedTraitFromSpaceAlphaOutput.StatusEnum',
        },
    ];
    return RemoveComputedTraitFromSpaceAlphaOutput;
}());
exports.RemoveComputedTraitFromSpaceAlphaOutput = RemoveComputedTraitFromSpaceAlphaOutput;
(function (RemoveComputedTraitFromSpaceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveComputedTraitFromSpaceAlphaOutput.StatusEnum || (RemoveComputedTraitFromSpaceAlphaOutput.StatusEnum = {}));
})(RemoveComputedTraitFromSpaceAlphaOutput = exports.RemoveComputedTraitFromSpaceAlphaOutput || (exports.RemoveComputedTraitFromSpaceAlphaOutput = {}));
exports.RemoveComputedTraitFromSpaceAlphaOutput = RemoveComputedTraitFromSpaceAlphaOutput;
//# sourceMappingURL=removeComputedTraitFromSpaceAlphaOutput.js.map