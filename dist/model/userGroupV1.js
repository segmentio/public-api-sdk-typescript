"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupV1 = void 0;
var UserGroupV1 = (function () {
    function UserGroupV1() {
    }
    UserGroupV1.getAttributeTypeMap = function () {
        return UserGroupV1.attributeTypeMap;
    };
    UserGroupV1.discriminator = undefined;
    UserGroupV1.attributeTypeMap = [
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
    return UserGroupV1;
}());
exports.UserGroupV1 = UserGroupV1;
//# sourceMappingURL=userGroupV1.js.map