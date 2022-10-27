"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWarehouseV1Output = void 0;
var DeleteWarehouseV1Output = (function () {
    function DeleteWarehouseV1Output() {
    }
    DeleteWarehouseV1Output.getAttributeTypeMap = function () {
        return DeleteWarehouseV1Output.attributeTypeMap;
    };
    DeleteWarehouseV1Output.discriminator = undefined;
    DeleteWarehouseV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteWarehouseV1Output.StatusEnum',
        },
    ];
    return DeleteWarehouseV1Output;
}());
exports.DeleteWarehouseV1Output = DeleteWarehouseV1Output;
(function (DeleteWarehouseV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteWarehouseV1Output.StatusEnum || (DeleteWarehouseV1Output.StatusEnum = {}));
})(DeleteWarehouseV1Output = exports.DeleteWarehouseV1Output || (exports.DeleteWarehouseV1Output = {}));
exports.DeleteWarehouseV1Output = DeleteWarehouseV1Output;
//# sourceMappingURL=deleteWarehouseV1Output.js.map