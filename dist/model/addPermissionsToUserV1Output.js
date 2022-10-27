"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPermissionsToUserV1Output = void 0;
var AddPermissionsToUserV1Output = (function () {
    function AddPermissionsToUserV1Output() {
    }
    AddPermissionsToUserV1Output.getAttributeTypeMap = function () {
        return AddPermissionsToUserV1Output.attributeTypeMap;
    };
    AddPermissionsToUserV1Output.discriminator = undefined;
    AddPermissionsToUserV1Output.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<AccessPermissionV1>',
        },
    ];
    return AddPermissionsToUserV1Output;
}());
exports.AddPermissionsToUserV1Output = AddPermissionsToUserV1Output;
//# sourceMappingURL=addPermissionsToUserV1Output.js.map