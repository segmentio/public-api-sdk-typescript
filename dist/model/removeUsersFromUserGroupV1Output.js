"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUsersFromUserGroupV1Output = void 0;
var RemoveUsersFromUserGroupV1Output = (function () {
    function RemoveUsersFromUserGroupV1Output() {
    }
    RemoveUsersFromUserGroupV1Output.getAttributeTypeMap = function () {
        return RemoveUsersFromUserGroupV1Output.attributeTypeMap;
    };
    RemoveUsersFromUserGroupV1Output.discriminator = undefined;
    RemoveUsersFromUserGroupV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveUsersFromUserGroupV1Output.StatusEnum',
        },
    ];
    return RemoveUsersFromUserGroupV1Output;
}());
exports.RemoveUsersFromUserGroupV1Output = RemoveUsersFromUserGroupV1Output;
(function (RemoveUsersFromUserGroupV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveUsersFromUserGroupV1Output.StatusEnum || (RemoveUsersFromUserGroupV1Output.StatusEnum = {}));
})(RemoveUsersFromUserGroupV1Output = exports.RemoveUsersFromUserGroupV1Output || (exports.RemoveUsersFromUserGroupV1Output = {}));
exports.RemoveUsersFromUserGroupV1Output = RemoveUsersFromUserGroupV1Output;
//# sourceMappingURL=removeUsersFromUserGroupV1Output.js.map