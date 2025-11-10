"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransformationFunctionInstanceAlphaOutput = void 0;
var DeleteTransformationFunctionInstanceAlphaOutput = (function () {
    function DeleteTransformationFunctionInstanceAlphaOutput() {
    }
    DeleteTransformationFunctionInstanceAlphaOutput.getAttributeTypeMap = function () {
        return DeleteTransformationFunctionInstanceAlphaOutput.attributeTypeMap;
    };
    DeleteTransformationFunctionInstanceAlphaOutput.discriminator = undefined;
    DeleteTransformationFunctionInstanceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteTransformationFunctionInstanceAlphaOutput.StatusEnum',
        },
    ];
    return DeleteTransformationFunctionInstanceAlphaOutput;
}());
exports.DeleteTransformationFunctionInstanceAlphaOutput = DeleteTransformationFunctionInstanceAlphaOutput;
(function (DeleteTransformationFunctionInstanceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteTransformationFunctionInstanceAlphaOutput.StatusEnum || (DeleteTransformationFunctionInstanceAlphaOutput.StatusEnum = {}));
})(DeleteTransformationFunctionInstanceAlphaOutput = exports.DeleteTransformationFunctionInstanceAlphaOutput || (exports.DeleteTransformationFunctionInstanceAlphaOutput = {}));
exports.DeleteTransformationFunctionInstanceAlphaOutput = DeleteTransformationFunctionInstanceAlphaOutput;
//# sourceMappingURL=deleteTransformationFunctionInstanceAlphaOutput.js.map