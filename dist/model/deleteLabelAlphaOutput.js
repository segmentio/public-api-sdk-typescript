"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLabelAlphaOutput = void 0;
var DeleteLabelAlphaOutput = (function () {
    function DeleteLabelAlphaOutput() {
    }
    DeleteLabelAlphaOutput.getAttributeTypeMap = function () {
        return DeleteLabelAlphaOutput.attributeTypeMap;
    };
    DeleteLabelAlphaOutput.discriminator = undefined;
    DeleteLabelAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteLabelAlphaOutput.StatusEnum',
        },
    ];
    return DeleteLabelAlphaOutput;
}());
exports.DeleteLabelAlphaOutput = DeleteLabelAlphaOutput;
(function (DeleteLabelAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteLabelAlphaOutput.StatusEnum || (DeleteLabelAlphaOutput.StatusEnum = {}));
})(DeleteLabelAlphaOutput = exports.DeleteLabelAlphaOutput || (exports.DeleteLabelAlphaOutput = {}));
exports.DeleteLabelAlphaOutput = DeleteLabelAlphaOutput;
//# sourceMappingURL=deleteLabelAlphaOutput.js.map