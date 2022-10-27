"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsersV1Output = void 0;
var DeleteUsersV1Output = (function () {
    function DeleteUsersV1Output() {
    }
    DeleteUsersV1Output.getAttributeTypeMap = function () {
        return DeleteUsersV1Output.attributeTypeMap;
    };
    DeleteUsersV1Output.discriminator = undefined;
    DeleteUsersV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteUsersV1Output.StatusEnum',
        },
    ];
    return DeleteUsersV1Output;
}());
exports.DeleteUsersV1Output = DeleteUsersV1Output;
(function (DeleteUsersV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteUsersV1Output.StatusEnum || (DeleteUsersV1Output.StatusEnum = {}));
})(DeleteUsersV1Output = exports.DeleteUsersV1Output || (exports.DeleteUsersV1Output = {}));
exports.DeleteUsersV1Output = DeleteUsersV1Output;
//# sourceMappingURL=deleteUsersV1Output.js.map