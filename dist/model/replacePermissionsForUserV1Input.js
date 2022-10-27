"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacePermissionsForUserV1Input = void 0;
var ReplacePermissionsForUserV1Input = (function () {
    function ReplacePermissionsForUserV1Input() {
    }
    ReplacePermissionsForUserV1Input.getAttributeTypeMap = function () {
        return ReplacePermissionsForUserV1Input.attributeTypeMap;
    };
    ReplacePermissionsForUserV1Input.discriminator = undefined;
    ReplacePermissionsForUserV1Input.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<PermissionInputV1>',
        },
    ];
    return ReplacePermissionsForUserV1Input;
}());
exports.ReplacePermissionsForUserV1Input = ReplacePermissionsForUserV1Input;
//# sourceMappingURL=replacePermissionsForUserV1Input.js.map