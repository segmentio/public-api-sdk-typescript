"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPermissionsToUserGroupV1Output = void 0;
var AddPermissionsToUserGroupV1Output = (function () {
    function AddPermissionsToUserGroupV1Output() {
    }
    AddPermissionsToUserGroupV1Output.getAttributeTypeMap = function () {
        return AddPermissionsToUserGroupV1Output.attributeTypeMap;
    };
    AddPermissionsToUserGroupV1Output.discriminator = undefined;
    AddPermissionsToUserGroupV1Output.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<AccessPermissionV1>',
        },
    ];
    return AddPermissionsToUserGroupV1Output;
}());
exports.AddPermissionsToUserGroupV1Output = AddPermissionsToUserGroupV1Output;
//# sourceMappingURL=addPermissionsToUserGroupV1Output.js.map