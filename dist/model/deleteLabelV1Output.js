"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLabelV1Output = void 0;
var DeleteLabelV1Output = (function () {
    function DeleteLabelV1Output() {
    }
    DeleteLabelV1Output.getAttributeTypeMap = function () {
        return DeleteLabelV1Output.attributeTypeMap;
    };
    DeleteLabelV1Output.discriminator = undefined;
    DeleteLabelV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteLabelV1Output.StatusEnum',
        },
    ];
    return DeleteLabelV1Output;
}());
exports.DeleteLabelV1Output = DeleteLabelV1Output;
(function (DeleteLabelV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteLabelV1Output.StatusEnum || (DeleteLabelV1Output.StatusEnum = {}));
})(DeleteLabelV1Output = exports.DeleteLabelV1Output || (exports.DeleteLabelV1Output = {}));
exports.DeleteLabelV1Output = DeleteLabelV1Output;
//# sourceMappingURL=deleteLabelV1Output.js.map