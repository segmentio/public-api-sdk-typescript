"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup = void 0;
var UserGroup = (function () {
    function UserGroup() {
    }
    UserGroup.getAttributeTypeMap = function () {
        return UserGroup.attributeTypeMap;
    };
    UserGroup.discriminator = undefined;
    UserGroup.attributeTypeMap = [
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
    return UserGroup;
}());
exports.UserGroup = UserGroup;
//# sourceMappingURL=userGroup.js.map