"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserGroupV1Output = void 0;
var DeleteUserGroupV1Output = (function () {
    function DeleteUserGroupV1Output() {
    }
    DeleteUserGroupV1Output.getAttributeTypeMap = function () {
        return DeleteUserGroupV1Output.attributeTypeMap;
    };
    DeleteUserGroupV1Output.discriminator = undefined;
    DeleteUserGroupV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteUserGroupV1Output.StatusEnum',
        },
    ];
    return DeleteUserGroupV1Output;
}());
exports.DeleteUserGroupV1Output = DeleteUserGroupV1Output;
(function (DeleteUserGroupV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteUserGroupV1Output.StatusEnum || (DeleteUserGroupV1Output.StatusEnum = {}));
})(DeleteUserGroupV1Output = exports.DeleteUserGroupV1Output || (exports.DeleteUserGroupV1Output = {}));
exports.DeleteUserGroupV1Output = DeleteUserGroupV1Output;
//# sourceMappingURL=deleteUserGroupV1Output.js.map