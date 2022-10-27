"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteV1 = void 0;
var InviteV1 = (function () {
    function InviteV1() {
    }
    InviteV1.getAttributeTypeMap = function () {
        return InviteV1.attributeTypeMap;
    };
    InviteV1.discriminator = undefined;
    InviteV1.attributeTypeMap = [
        {
            name: 'email',
            baseName: 'email',
            type: 'string',
        },
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<InvitePermissionV1>',
        },
    ];
    return InviteV1;
}());
exports.InviteV1 = InviteV1;
//# sourceMappingURL=inviteV1.js.map