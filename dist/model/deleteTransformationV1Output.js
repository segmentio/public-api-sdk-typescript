"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransformationV1Output = void 0;
var DeleteTransformationV1Output = (function () {
    function DeleteTransformationV1Output() {
    }
    DeleteTransformationV1Output.getAttributeTypeMap = function () {
        return DeleteTransformationV1Output.attributeTypeMap;
    };
    DeleteTransformationV1Output.discriminator = undefined;
    DeleteTransformationV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteTransformationV1Output.StatusEnum',
        },
    ];
    return DeleteTransformationV1Output;
}());
exports.DeleteTransformationV1Output = DeleteTransformationV1Output;
(function (DeleteTransformationV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteTransformationV1Output.StatusEnum || (DeleteTransformationV1Output.StatusEnum = {}));
})(DeleteTransformationV1Output = exports.DeleteTransformationV1Output || (exports.DeleteTransformationV1Output = {}));
exports.DeleteTransformationV1Output = DeleteTransformationV1Output;
//# sourceMappingURL=deleteTransformationV1Output.js.map