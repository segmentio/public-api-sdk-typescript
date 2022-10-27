"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacePermissionsForUserV1Output = void 0;
var ReplacePermissionsForUserV1Output = (function () {
    function ReplacePermissionsForUserV1Output() {
    }
    ReplacePermissionsForUserV1Output.getAttributeTypeMap = function () {
        return ReplacePermissionsForUserV1Output.attributeTypeMap;
    };
    ReplacePermissionsForUserV1Output.discriminator = undefined;
    ReplacePermissionsForUserV1Output.attributeTypeMap = [
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<AccessPermissionV1>',
        },
    ];
    return ReplacePermissionsForUserV1Output;
}());
exports.ReplacePermissionsForUserV1Output = ReplacePermissionsForUserV1Output;
//# sourceMappingURL=replacePermissionsForUserV1Output.js.map