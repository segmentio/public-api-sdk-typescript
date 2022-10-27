"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup2 = void 0;
var UserGroup2 = (function () {
    function UserGroup2() {
    }
    UserGroup2.getAttributeTypeMap = function () {
        return UserGroup2.attributeTypeMap;
    };
    UserGroup2.discriminator = undefined;
    UserGroup2.attributeTypeMap = [
        {
            name: 'memberCount',
            baseName: 'memberCount',
            type: 'number',
        },
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<PermissionV1>',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
    ];
    return UserGroup2;
}());
exports.UserGroup2 = UserGroup2;
//# sourceMappingURL=userGroup2.js.map