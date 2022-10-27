"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionInputV1 = void 0;
var PermissionInputV1 = (function () {
    function PermissionInputV1() {
    }
    PermissionInputV1.getAttributeTypeMap = function () {
        return PermissionInputV1.attributeTypeMap;
    };
    PermissionInputV1.discriminator = undefined;
    PermissionInputV1.attributeTypeMap = [
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
    ];
    return PermissionInputV1;
}());
exports.PermissionInputV1 = PermissionInputV1;
//# sourceMappingURL=permissionInputV1.js.map