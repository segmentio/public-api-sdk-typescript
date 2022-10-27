"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitePermissionV1 = void 0;
var InvitePermissionV1 = (function () {
    function InvitePermissionV1() {
    }
    InvitePermissionV1.getAttributeTypeMap = function () {
        return InvitePermissionV1.attributeTypeMap;
    };
    InvitePermissionV1.discriminator = undefined;
    InvitePermissionV1.attributeTypeMap = [
        {
            name: 'roleId',
            baseName: 'roleId',
            type: 'string',
        },
        {
            name: 'resources',
            baseName: 'resources',
            type: 'Array<ResourceV1>',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<AllowedLabelBeta>',
        },
    ];
    return InvitePermissionV1;
}());
exports.InvitePermissionV1 = InvitePermissionV1;
//# sourceMappingURL=invitePermissionV1.js.map