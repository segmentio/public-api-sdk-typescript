"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransformationBetaOutput = void 0;
var DeleteTransformationBetaOutput = (function () {
    function DeleteTransformationBetaOutput() {
    }
    DeleteTransformationBetaOutput.getAttributeTypeMap = function () {
        return DeleteTransformationBetaOutput.attributeTypeMap;
    };
    DeleteTransformationBetaOutput.discriminator = undefined;
    DeleteTransformationBetaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteTransformationBetaOutput.StatusEnum',
        },
    ];
    return DeleteTransformationBetaOutput;
}());
exports.DeleteTransformationBetaOutput = DeleteTransformationBetaOutput;
(function (DeleteTransformationBetaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteTransformationBetaOutput.StatusEnum || (DeleteTransformationBetaOutput.StatusEnum = {}));
})(DeleteTransformationBetaOutput = exports.DeleteTransformationBetaOutput || (exports.DeleteTransformationBetaOutput = {}));
exports.DeleteTransformationBetaOutput = DeleteTransformationBetaOutput;
//# sourceMappingURL=deleteTransformationBetaOutput.js.map