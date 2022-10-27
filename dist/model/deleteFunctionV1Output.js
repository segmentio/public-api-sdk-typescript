"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFunctionV1Output = void 0;
var DeleteFunctionV1Output = (function () {
    function DeleteFunctionV1Output() {
    }
    DeleteFunctionV1Output.getAttributeTypeMap = function () {
        return DeleteFunctionV1Output.attributeTypeMap;
    };
    DeleteFunctionV1Output.discriminator = undefined;
    DeleteFunctionV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteFunctionV1Output.StatusEnum',
        },
    ];
    return DeleteFunctionV1Output;
}());
exports.DeleteFunctionV1Output = DeleteFunctionV1Output;
(function (DeleteFunctionV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteFunctionV1Output.StatusEnum || (DeleteFunctionV1Output.StatusEnum = {}));
})(DeleteFunctionV1Output = exports.DeleteFunctionV1Output || (exports.DeleteFunctionV1Output = {}));
exports.DeleteFunctionV1Output = DeleteFunctionV1Output;
//# sourceMappingURL=deleteFunctionV1Output.js.map