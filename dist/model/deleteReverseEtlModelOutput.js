"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReverseEtlModelOutput = void 0;
var DeleteReverseEtlModelOutput = (function () {
    function DeleteReverseEtlModelOutput() {
    }
    DeleteReverseEtlModelOutput.getAttributeTypeMap = function () {
        return DeleteReverseEtlModelOutput.attributeTypeMap;
    };
    DeleteReverseEtlModelOutput.discriminator = undefined;
    DeleteReverseEtlModelOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteReverseEtlModelOutput.StatusEnum',
        },
    ];
    return DeleteReverseEtlModelOutput;
}());
exports.DeleteReverseEtlModelOutput = DeleteReverseEtlModelOutput;
(function (DeleteReverseEtlModelOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteReverseEtlModelOutput.StatusEnum || (DeleteReverseEtlModelOutput.StatusEnum = {}));
})(DeleteReverseEtlModelOutput = exports.DeleteReverseEtlModelOutput || (exports.DeleteReverseEtlModelOutput = {}));
exports.DeleteReverseEtlModelOutput = DeleteReverseEtlModelOutput;
//# sourceMappingURL=deleteReverseEtlModelOutput.js.map