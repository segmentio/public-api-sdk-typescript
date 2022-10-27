"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessPermissionV1 = void 0;
var AccessPermissionV1 = (function () {
    function AccessPermissionV1() {
    }
    AccessPermissionV1.getAttributeTypeMap = function () {
        return AccessPermissionV1.attributeTypeMap;
    };
    AccessPermissionV1.discriminator = undefined;
    AccessPermissionV1.attributeTypeMap = [
        {
            name: 'roleId',
            baseName: 'roleId',
            type: 'string',
        },
        {
            name: 'roleName',
            baseName: 'roleName',
            type: 'string',
        },
        {
            name: 'resources',
            baseName: 'resources',
            type: 'Array<PermissionResourceV1>',
        },
    ];
    return AccessPermissionV1;
}());
exports.AccessPermissionV1 = AccessPermissionV1;
//# sourceMappingURL=accessPermissionV1.js.map