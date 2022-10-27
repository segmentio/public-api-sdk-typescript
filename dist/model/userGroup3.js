"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup3 = void 0;
var UserGroup3 = (function () {
    function UserGroup3() {
    }
    UserGroup3.getAttributeTypeMap = function () {
        return UserGroup3.attributeTypeMap;
    };
    UserGroup3.discriminator = undefined;
    UserGroup3.attributeTypeMap = [
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
    return UserGroup3;
}());
exports.UserGroup3 = UserGroup3;
//# sourceMappingURL=userGroup3.js.map