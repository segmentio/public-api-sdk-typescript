"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPermissionsToUserGroupV1Input = void 0;
var AddPermissionsToUserGroupV1Input = (function () {
    function AddPermissionsToUserGroupV1Input() {
    }
    AddPermissionsToUserGroupV1Input.getAttributeTypeMap = function () {
        return AddPermissionsToUserGroupV1Input.attributeTypeMap;
    };
    AddPermissionsToUserGroupV1Input.discriminator = undefined;
    AddPermissionsToUserGroupV1Input.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<PermissionInputV1>',
        },
    ];
    return AddPermissionsToUserGroupV1Input;
}());
exports.AddPermissionsToUserGroupV1Input = AddPermissionsToUserGroupV1Input;
//# sourceMappingURL=addPermissionsToUserGroupV1Input.js.map