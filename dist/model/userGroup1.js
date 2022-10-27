"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup1 = void 0;
var UserGroup1 = (function () {
    function UserGroup1() {
    }
    UserGroup1.getAttributeTypeMap = function () {
        return UserGroup1.attributeTypeMap;
    };
    UserGroup1.discriminator = undefined;
    UserGroup1.attributeTypeMap = [
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
    return UserGroup1;
}());
exports.UserGroup1 = UserGroup1;
//# sourceMappingURL=userGroup1.js.map