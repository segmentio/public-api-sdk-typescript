"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionV1 = void 0;
var PermissionV1 = (function () {
    function PermissionV1() {
    }
    PermissionV1.getAttributeTypeMap = function () {
        return PermissionV1.attributeTypeMap;
    };
    PermissionV1.discriminator = undefined;
    PermissionV1.attributeTypeMap = [
        {
            name: 'roleName',
            baseName: 'roleName',
            type: 'string',
        },
        {
            name: 'roleId',
            baseName: 'roleId',
            type: 'string',
        },
        {
            name: 'resources',
            baseName: 'resources',
            type: 'Array<PermissionResourceV1>',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<AllowedLabelBeta>',
        },
    ];
    return PermissionV1;
}());
exports.PermissionV1 = PermissionV1;
//# sourceMappingURL=permissionV1.js.map