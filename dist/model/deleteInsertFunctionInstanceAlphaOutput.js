"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInsertFunctionInstanceAlphaOutput = void 0;
var DeleteInsertFunctionInstanceAlphaOutput = (function () {
    function DeleteInsertFunctionInstanceAlphaOutput() {
    }
    DeleteInsertFunctionInstanceAlphaOutput.getAttributeTypeMap = function () {
        return DeleteInsertFunctionInstanceAlphaOutput.attributeTypeMap;
    };
    DeleteInsertFunctionInstanceAlphaOutput.discriminator = undefined;
    DeleteInsertFunctionInstanceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteInsertFunctionInstanceAlphaOutput.StatusEnum',
        },
    ];
    return DeleteInsertFunctionInstanceAlphaOutput;
}());
exports.DeleteInsertFunctionInstanceAlphaOutput = DeleteInsertFunctionInstanceAlphaOutput;
(function (DeleteInsertFunctionInstanceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteInsertFunctionInstanceAlphaOutput.StatusEnum || (DeleteInsertFunctionInstanceAlphaOutput.StatusEnum = {}));
})(DeleteInsertFunctionInstanceAlphaOutput = exports.DeleteInsertFunctionInstanceAlphaOutput || (exports.DeleteInsertFunctionInstanceAlphaOutput = {}));
exports.DeleteInsertFunctionInstanceAlphaOutput = DeleteInsertFunctionInstanceAlphaOutput;
//# sourceMappingURL=deleteInsertFunctionInstanceAlphaOutput.js.map