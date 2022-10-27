"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacePermissionsForUserGroupV1Output = void 0;
var ReplacePermissionsForUserGroupV1Output = (function () {
    function ReplacePermissionsForUserGroupV1Output() {
    }
    ReplacePermissionsForUserGroupV1Output.getAttributeTypeMap = function () {
        return ReplacePermissionsForUserGroupV1Output.attributeTypeMap;
    };
    ReplacePermissionsForUserGroupV1Output.discriminator = undefined;
    ReplacePermissionsForUserGroupV1Output.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<AccessPermissionV1>',
        },
    ];
    return ReplacePermissionsForUserGroupV1Output;
}());
exports.ReplacePermissionsForUserGroupV1Output = ReplacePermissionsForUserGroupV1Output;
//# sourceMappingURL=replacePermissionsForUserGroupV1Output.js.map