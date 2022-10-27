"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacePermissionsForUserGroupV1Input = void 0;
var ReplacePermissionsForUserGroupV1Input = (function () {
    function ReplacePermissionsForUserGroupV1Input() {
    }
    ReplacePermissionsForUserGroupV1Input.getAttributeTypeMap = function () {
        return ReplacePermissionsForUserGroupV1Input.attributeTypeMap;
    };
    ReplacePermissionsForUserGroupV1Input.discriminator = undefined;
    ReplacePermissionsForUserGroupV1Input.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<PermissionInputV1>',
        },
    ];
    return ReplacePermissionsForUserGroupV1Input;
}());
exports.ReplacePermissionsForUserGroupV1Input = ReplacePermissionsForUserGroupV1Input;
//# sourceMappingURL=replacePermissionsForUserGroupV1Input.js.map