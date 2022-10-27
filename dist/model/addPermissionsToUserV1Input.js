"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPermissionsToUserV1Input = void 0;
var AddPermissionsToUserV1Input = (function () {
    function AddPermissionsToUserV1Input() {
    }
    AddPermissionsToUserV1Input.getAttributeTypeMap = function () {
        return AddPermissionsToUserV1Input.attributeTypeMap;
    };
    AddPermissionsToUserV1Input.discriminator = undefined;
    AddPermissionsToUserV1Input.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<PermissionInputV1>',
        },
    ];
    return AddPermissionsToUserV1Input;
}());
exports.AddPermissionsToUserV1Input = AddPermissionsToUserV1Input;
//# sourceMappingURL=addPermissionsToUserV1Input.js.map