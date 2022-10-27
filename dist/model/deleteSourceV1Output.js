"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSourceV1Output = void 0;
var DeleteSourceV1Output = (function () {
    function DeleteSourceV1Output() {
    }
    DeleteSourceV1Output.getAttributeTypeMap = function () {
        return DeleteSourceV1Output.attributeTypeMap;
    };
    DeleteSourceV1Output.discriminator = undefined;
    DeleteSourceV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteSourceV1Output.StatusEnum',
        },
    ];
    return DeleteSourceV1Output;
}());
exports.DeleteSourceV1Output = DeleteSourceV1Output;
(function (DeleteSourceV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteSourceV1Output.StatusEnum || (DeleteSourceV1Output.StatusEnum = {}));
})(DeleteSourceV1Output = exports.DeleteSourceV1Output || (exports.DeleteSourceV1Output = {}));
exports.DeleteSourceV1Output = DeleteSourceV1Output;
//# sourceMappingURL=deleteSourceV1Output.js.map